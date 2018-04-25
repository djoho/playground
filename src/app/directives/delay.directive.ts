import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[acmaDelay]'
})
export class DelayDirective implements OnInit {
    public _delay: number = 200;
    @Input('acmaDelay') set delay(val: number) {
        this._delay = val;
    }

    constructor(private templateRef: TemplateRef<any>,
                private viewContainerRef: ViewContainerRef) {
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }, this._delay);
    }

}
