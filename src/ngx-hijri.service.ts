import { Injectable } from '@angular/core';
import { HijriDate, HijriJs, Lang, LangFormat, default as Xsoh } from 'hijri-js';
// import * as Xsoh from 'hijri-js';

@Injectable()
export class HijriService {

    public getResult(): string {
        const x = new Xsoh();
        console.log(' ==> ', x);
        const h: HijriDate = x.today();

        console.log(' Foo ==> ', this.getFoo());

        return 'It works!! = today is = ' + h.full
        + ' GtoH = ' + x.toHijri('12122000', '').full
        + ' HtoG = ' + x.toGregorian('11-7-1386', '-');
    }

    public getFoo(): Lang {
        const x: Lang = new LangFormat();
        x.prefix = 'Ar';
        x.notation = 'B.c';
        return x;
    }
}
