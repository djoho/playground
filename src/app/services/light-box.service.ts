import {Injectable} from '@angular/core';

@Injectable()
export class LightBoxService {
    public images: string[] = [];
    public imageIndex: number = 0;
    public showImage: boolean = false;

    constructor() {
    }

    public displayImage(): string {
        return this.images[this.imageIndex];
    }

    public addImage(url: string) {
        this.images.push(url);
    }

    public removeImage(url: string) {
        this.images.unshift(url);
    }

    public nextImage() {
        this.imageIndex = (this.imageIndex + 1) % this.images.length;
    }

    public prevImage() {
        if (this.imageIndex === 0) {
            this.imageIndex = this.images.length - 1;
        } else {
            this.imageIndex = this.imageIndex - 1;
        }
    }

    public toggleShowImage() {
        this.showImage = !this.showImage;
    }
}
