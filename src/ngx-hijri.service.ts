import { Injectable } from '@angular/core';
import * as hijri from 'xsoh-hijri';

@Injectable()
export class HijriService {

    public getResult(): string {
        // const v = hj.basecal('12/12/2018', 1);
        const v = hijri.default.prototype.toHijri('12/12/2018', '/');
        return 'It works!! = ' + v;
    }
}