import { Injectable } from '@angular/core';
import * as Xsoh from 'hijri-js';

@Injectable()
export class HijriService implements hijriJs.HijriDate {

    public year: string;
    public month: string;
    public day: string;
    public splitter: string;
    public full: string;

    public getResult(): string {
        const x = new Xsoh.default();
        const h: hijriJs.HijriDate = x.today();
        return 'It works!! = today is = ' + h.full
        + ' GtoH = ' + x.toHijri('12122000', '').full
        + ' HtoG = ' + x.toGregorian('11-7-1386', '-');
    }
}
