import {Directive, HostBinding, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {LightBoxService} from '../services/light-box.service';

@Directive({
    selector: '[acmaLightBox]'
})
export class LightBoxDirective implements OnInit, OnDestroy {
    @Input() src: string;

    constructor(public lightBoxService: LightBoxService) {
    }

    @HostBinding('class.selected') get isSelected(): boolean {
        return this.src === this.lightBoxService.displayImage();
    }

    @HostListener('click', ['$event']) onMouseClick(event: MouseEvent) {
        for (let i = 0; i < this.lightBoxService.images.length; i++) {
            if (this.lightBoxService.images[i] === this.src) {
                this.lightBoxService.imageIndex = i;
            }
        }
        this.lightBoxService.toggleShowImage();
    }

    ngOnDestroy(): void {
        // console.log(this.src);
        this.lightBoxService.removeImage(this.src);
    }

    ngOnInit(): void {
        //console.log(this.src);
        this.lightBoxService.addImage(this.src);
    }
}
