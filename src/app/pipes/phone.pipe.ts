import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'phone'
})
export class PhonePipe implements PipeTransform {

    transform(value: string, args?: any): any {
        if (typeof value === 'string') {
            if (value.startsWith('+') && value.length === 12) {
                return value.substr(0, 3) + ' ' + value.substr(3, 2) + ' ' + value.substr(5, 3) + ' ' + value.substr(8, 2) + ' ' + value.substr(10, 2);
            }
            if (value.length === 10) {
                return value.substr(0, 3) + ' ' + value.substr(3, 3) + ' ' + value.substr(6, 2) + ' ' + value.substr(8, 2);
            }
        } else {
            console.warn('Invalid type in phone pipe', value);
        }
        return value;
    }

}
