import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WikipediaService {

    constructor(private jsonp: Jsonp) {

    }

    public getData(search: string): Observable<Array<any>> {
        return this.jsonp.get('https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="' + search + '"')
            .map(res => res.json());
    }
}
