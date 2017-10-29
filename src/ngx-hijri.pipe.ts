import { Pipe, PipeTransform} from '@angular/core';
import { HijriService } from './ngx-hijri.service';

@Pipe({
    name: 'hijri',
})
export class ToHijriPipe implements PipeTransform {

    constructor( private _hijriService: HijriService) {
    }

    transform(value: string, splitter: string, format: string) {
        let sp: string = '';
        if (splitter) {
            sp = splitter;
        }
        console.log(value, splitter, format, sp);
        if (format === 'full') {
            return this._hijriService.convertToHijri(value, sp).full;
        }
        return this._hijriService.convertToHijri(value, sp).plain;
    }

}

@Pipe({
    name: 'gregorian',
})
export class ToGregorianPipe implements PipeTransform {

    constructor( private _hijriService: HijriService) {
    }

    transform(value: string, splitter: string, format: string) {
        console.log('Pipe H = ', value, splitter, format);
        let sp: string = '';
        if (splitter) {
            sp = splitter;
        }
        if (format === 'full') {
            return this._hijriService.convertToGregorian(value, sp);
        }

        return this._hijriService.convertToGregorian(value, sp).getDate()
            + sp + (this._hijriService.convertToGregorian(value, sp).getMonth() + 1)
            + sp + this._hijriService.convertToGregorian(value, sp).getFullYear();
    }
}
