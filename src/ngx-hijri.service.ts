import { Injectable } from '@angular/core';
import * as hijriLib from 'hijri-js';

@Injectable()
export class HijriService {

    private hijri: hijriLib.HijriJs;

    constructor() {
        this.hijri = hijriLib.intilizeHijriJs();
    }

    public getToday(): hijriLib.HijriDate {
       return this.hijri.today();
    }

    public convertToHijri(gregorianDate: string, splitter: string): hijriLib.HijriDate {
        return this.hijri.toHijri(gregorianDate, splitter);
    }

    public convertToGregorian(hijriDate: string, splitter: string): Date {
        return this.hijri.toGregorian(hijriDate, splitter);
    }
}
