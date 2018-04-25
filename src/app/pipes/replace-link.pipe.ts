import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'replaceLink'
})
export class ReplaceLinkPipe implements PipeTransform {

    transform(value: string, args?: any): any {
        if (typeof value === 'string') {
            if ((/(http|https|ftp):\/\/\w*/).test(value)) {
                let result: string[] = value.match(/(http|https|ftp):\/\/\w.*[^0-9a-zA-Z]/);
                console.log(result[0]);
                console.log(result[1]);
                return '<a href=' + value + '>' + value + '</a>';
            }
        } else {
            console.warn('Invalid type in replaceLink pipe', value);
        }
        return value;
    }

}
