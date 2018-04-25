import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[acmaRange]'
})
export class RangeDirective implements OnInit {
    @Input('acmaRange') range: [number, number];

    constructor(private templateRef: TemplateRef<any>,
                private viewContainerRef: ViewContainerRef
    ) {
    }

    ngOnInit(): void {
        let tempNumberArray: number[] = this.createRange(this.range[0], this.range[1]);
        tempNumberArray.forEach(number => {
            this.viewContainerRef.createEmbeddedView(this.templateRef, {
                $implicit: number
            });
        });
    }

    private createRange(start: number, end: number): Array<number> {
        // return [...(<any>Array( 1 + end - start)).keys()].map(v => start + v);
        let tempArray: number[] = [];
        for (let i = start; i <= end; i++) {
            tempArray.push(i);
        }
        return tempArray;
    }

}
