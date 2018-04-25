import {Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2} from '@angular/core';

@Directive({
    selector: '[acmaHighlight]'
})
export class HighlightDirective {
    public _acmaHighlight: string = 'yellow';
    // Alternativ auch eigene Namen verwenden: @Input('acmaHighlight') set color(val: string) {
    @Input() set acmaHighlight(val: string) {
        this._acmaHighlight = val;
        this.onColorChanged.emit(this._acmaHighlight);
    }

    @Output() onColorChanged: EventEmitter<string> = new EventEmitter<string>();

    @HostListener('mouseenter', ['$event']) onMouseEnter(event: MouseEvent) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', this._acmaHighlight);
    }

    // // Mouseover wird permanent gefeuert, beim Bewegen der Maus
    // @HostListener('mouseover', ['$event']) onMouseOver(event: MouseEvent) {
    //     // Funktioniert nur im Browser, wenn ein Style vorhanden ist. Das ist bei Mobile Apps nicht unbedingt der Fall
    //     this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    // }

    @HostListener('mouseleave', ['$event']) onMouseLeave(event: MouseEvent) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'inherit');
    }

    constructor(private elementRef: ElementRef,
                private renderer: Renderer2) {
    }

}
