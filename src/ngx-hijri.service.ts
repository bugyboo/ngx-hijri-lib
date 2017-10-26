import { Injectable } from '@angular/core';
import * as Xsoh from 'hijri-js';

@Injectable()
export class HijriService {

    public getResult(): string {

        const x = Xsoh.intilizeHijriJs();

        const defLang: Xsoh.Lang = {
           prefix: 'ar',
           notation: 'Hijri',
           monthNames: ['صفر', 'محرم', 'ربيع 1', 'ربيع 2',
           'جماد 1', 'جماد 2', 'رجب', 'شعبان', 'رمضان', 'شوال', 'القعده', 'الحجه'],
           monthShortNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        } as Xsoh.Lang;

        x.setLang(defLang);
        const h: Xsoh.HijriDate = x.today();
        return 'It works!! = today is = ' + h.full
        + ' GtoH = ' + x.toHijri('12122000', '').plain
        + ' HtoG = ' + x.toGregorian('11-7-1386', '-');
    }
    /*
    public getFoo(): Lang {
        const x: Lang = new LangFormat();
        x.prefix = 'Ar';
        x.notation = 'B.c';
        return x;
    }
    */
}
