import {NgModule} from '@angular/core';
import {CounterComponent} from '../components/counter/counter.component';
import {AccordionWrapperComponent} from '../components/accordion/accordion-wrapper/accordion-wrapper.component';
import {AccordionElementComponent} from '../components/accordion/accordion-element/accordion-element.component';
import {CommonModule} from '@angular/common';
import {HighlightDirective} from '../directives/highlight.directive';
import {DelayDirective} from '../directives/delay.directive';
import {RangeDirective} from '../directives/range.directive';
import {LightBoxDirective} from '../directives/light-box.directive';
import {DebugComponent} from '../components/debug/debug.component';
import {BreakPipe} from '../pipes/break.pipe';
import {PhonePipe} from '../pipes/phone.pipe';
import {ReplaceLinkPipe} from '../pipes/replace-link.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CounterComponent,
        AccordionWrapperComponent,
        AccordionElementComponent,
        DebugComponent,
        HighlightDirective,
        DelayDirective,
        RangeDirective,
        LightBoxDirective,
        BreakPipe,
        PhonePipe,
        ReplaceLinkPipe
    ],
    declarations: [
        CounterComponent,
        AccordionWrapperComponent,
        AccordionElementComponent,
        DebugComponent,
        HighlightDirective,
        DelayDirective,
        RangeDirective,
        LightBoxDirective,
        BreakPipe,
        PhonePipe,
        ReplaceLinkPipe
    ],
    providers: [],
})
export class SharedModule {
}
