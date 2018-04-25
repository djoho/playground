import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InputEvent} from '../../interfaces/InputEvent';

@Component({
    selector: 'acma-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
    @Input() showStepResizer: boolean = true;
    @Output() stepSizeChanged: EventEmitter<number> = new EventEmitter<number>();

    public stepSize: number = 1;
    public count: number = 0;

    constructor() {
    }

    ngOnInit() {
    }

    public changeStepSize(event: InputEvent) {
        this.stepSize = parseInt(event.target.value, 10);
        this.stepSizeChanged.emit(this.stepSize);
    }
}
