import { Injectable } from '@angular/core';
import { hijriJS } from 'hijri-js';
import * as Xsoh from 'hijri-js';

@Injectable()
export class HijriService {

    public getResult(): string {
        const x = new Xsoh.default();
        console.log(' ==> ', x);
        const h: hijriJS.HijriDate = x.today();

        console.log(' Foo ==> ', this.getFoo());

        const f: hijriJS.Lang = new hijriJS.LangFormat();

        return 'It works!! = today is = ' + h.full
        + ' GtoH = ' + x.toHijri('12122000', '').full
        + ' HtoG = ' + x.toGregorian('11-7-1386', '-');
    }

    public getFoo(): hijriJS.HijriJs {
        const x: hijriJS.HijriJs = new Xsoh.default();
        return x;
    }
}
