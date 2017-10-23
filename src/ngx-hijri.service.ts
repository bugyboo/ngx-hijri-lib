import { Injectable } from '@angular/core';
import * as tst from 'base64-js';

@Injectable()
export class HijriService {

    public getResult(): string {
        // const v = hj.basecal('12/12/2018', 1);
        const v = tst.placeHoldersCount('abcd');
        return 'It works!! = ' + v;
    }
}