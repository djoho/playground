import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'acma-accordion-element',
    templateUrl: './accordion-element.component.html',
    styleUrls: ['./accordion-element.component.scss']
})
export class AccordionElementComponent implements OnInit {
    @Input() title: string = 'Unbenannt';
    @Input() isVisible: boolean = false;
    @Output() onVisibilityChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit() {
    }

    toggleVisibility() {
        this.isVisible = !this.isVisible;
        this.onVisibilityChanged.emit(this.isVisible);
    }
}
