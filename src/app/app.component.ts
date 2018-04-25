import {Component} from '@angular/core';
import {BoardMessageService} from './services/board-message.service';
import {InputEvent} from './interfaces/InputEvent';

@Component({
    selector: 'acma-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public title = 'Hallo Welt';
    public date: Date;
    public myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    public delayArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    public users = [
        {firstname: "Hans", lastname: "Meier"},
        {firstname: "Peter", lastname: "Müller"},
        {firstname: "DJ", lastname: "Bobo"},
        {firstname: "Karl", lastname: "Karlsson"}
    ]
    public myPhone: string = "";

    constructor(private boardMessageService: BoardMessageService) {
        setInterval(() => {
            this.date = new Date();
        }, 1000);

        // let i: number = 1;
        // setInterval(() => {
        //     boardMessageService.addMessage("Test" + i, "warning", 5000);
        //     i++;
        // }, 1000);
    }

    public setPhone(event: InputEvent) {
        this.myPhone = event.target.value;
    }

    public getDate(): Date {
        return new Date();
    }

    public log(data: any) {
        console.log(data);
    }
}
