import { Injectable } from '@angular/core';
import * as Xsoh from 'hijri-js';

@Injectable()
export class HijriService {

    public getResult(): string {
        const x = new Xsoh.default();
        const h: Xsoh.HijriDate = x.today();
        return 'It works!! = today is = ' + h.full
        + ' GtoH = ' + x.toHijri('12122000', '').full
        + ' HtoG = ' + x.toGregorian('11-7-1386', '-');
    }
}
