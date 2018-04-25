import {AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {AccordionElementComponent} from '../accordion-element/accordion-element.component';

@Component({
    selector: 'acma-accordion-wrapper',
    templateUrl: './accordion-wrapper.component.html',
    styleUrls: ['./accordion-wrapper.component.scss']
})
export class AccordionWrapperComponent implements OnInit, AfterContentInit {
    @ContentChildren(AccordionElementComponent) myAccordionElements: QueryList<AccordionElementComponent>;
    @Input() maxOpenElements: number = 2;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterContentInit(): void {
        this.myAccordionElements.toArray().forEach((myAccordionElement) => {
            myAccordionElement.onVisibilityChanged.subscribe((val) => {
                let tempArray = this.myAccordionElements.filter((myAccordionElement) => {
                    return myAccordionElement.isVisible;
                });
                if (tempArray.length > this.maxOpenElements) {
                    for (let val of tempArray) {
                        if (val !== myAccordionElement) {
                            val.isVisible = false;
                            break;
                        }
                    }
                }
            });
        });
    }
}
