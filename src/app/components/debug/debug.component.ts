import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'acma-debug',
    templateUrl: './debug.component.html',
    styleUrls: ['./debug.component.scss']
})
export class DebugComponent implements OnInit {
    @Input() data: any;

    constructor() {
    }

    ngOnInit() {
    }

}
