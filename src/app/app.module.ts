import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SharedModule} from './modules/shared.module';
import {BoardMessageComponent} from './board-message/board-message.component';
import {CoreModule} from './modules/core.module';
import { LightBoxComponent } from './components/light-box/light-box.component';
import { WikipediaComponent } from './components/wikipedia/wikipedia.component';

@NgModule({
    declarations: [
        AppComponent,
        BoardMessageComponent,
        LightBoxComponent,
        WikipediaComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        CoreModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
