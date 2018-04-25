import {Component, OnInit} from '@angular/core';
import {WikipediaService} from '../../services/wikipedia.service';
import {InputEvent} from '../../interfaces/InputEvent';

@Component({
    selector: 'acma-wikipedia',
    templateUrl: './wikipedia.component.html',
    styleUrls: ['./wikipedia.component.scss']
})
export class WikipediaComponent implements OnInit {
    public searchResults: Array<any> = [];

    constructor(private wikipediaService: WikipediaService) {
    }

    public refreshData(event: InputEvent) {
        this.wikipediaService.getData(event.target.value).subscribe((result) => {
            this.searchResults = result;
            console.log(this.searchResults);
        });
    }

    ngOnInit() {
    }
}
