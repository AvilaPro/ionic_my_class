import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from "@capacitor/camera";
import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Preferences } from "@capacitor/preferences";
import { Platform } from "@ionic/angular";

export interface Foto {
  filePath: string;
  webviewPath?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FotoService {
  public fotos: Foto[] = [];
  private PHOTO_STORAGE: string = "photos";
  private plataforma: Platform;

  constructor(platform: Platform) {
    this.plataforma = platform;
  }

  public async agregarFotoAGaleria() {
    const fotoCapturada = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.fotos.unshift({
      filePath: 'luego lo agregamos',
      webviewPath: fotoCapturada.webPath
    });

    Preferences.set({ key: this.PHOTO_STORAGE, value: JSON.stringify(this.fotos) });
  }

  async savePicture(cameraPhoto: Photo) {
    const base64Data = await this.readAsBase64(cameraPhoto);
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    if (this.plataforma.is('hybrid')) {
      return {
        filePath: fileName,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri)
      }
    } else {
      return {
        filePath: fileName,
        webviewPath: cameraPhoto.webPath
      }
    }
  }

  readAsBase64 = async (cameraPhoto: Photo) => {
    if (this.plataforma.is('hybrid') && cameraPhoto.path != undefined) {
      const file = await Filesystem.readFile({
        path: cameraPhoto.path,
      });
      return file.data;
    } else {
      const response = await fetch(cameraPhoto.webPath!);
      const blob = await response.blob();
      return await this.convertBlobToBase64(blob) as string;
    }
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

  async loadSaved() {
    const { value } = await Preferences.get({ key: this.PHOTO_STORAGE });
    this.fotos = (value ? JSON.parse(value) : []) as Foto[];

    if (!this.plataforma.is('hybrid')) {
      for (let foto of this.fotos) {
        const file = await Filesystem.readFile({
          path: foto.filePath,
          directory: Directory.Data
        });

        foto.webviewPath = `data:image/jpeg;base64,${file.data}`;
      }
    }
  }
}
