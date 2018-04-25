import {NgModule} from '@angular/core';
import {BoardMessageService} from '../services/board-message.service';
import {LightBoxService} from '../services/light-box.service';
import {WikipediaService} from '../services/wikipedia.service';
import {HttpModule, JsonpModule} from '@angular/http';

@NgModule({
    imports: [
        HttpModule,
        JsonpModule
    ],
    exports: [],
    declarations: [],
    providers: [
        BoardMessageService,
        LightBoxService,
        WikipediaService]
})
export class CoreModule {
}

