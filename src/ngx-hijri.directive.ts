import { Directive, ElementRef, AfterViewInit } from '@angular/core';

import { HijriService } from './ngx-hijri.service';

@Directive({
    selector: '[hijri-js]',
    exportAs: 'ngxHijriJs'
})
export class HijriDirective implements AfterViewInit {

    constructor( private _hijriService: HijriService,
                 private _elementRef: ElementRef) {
    }

    ngAfterViewInit(): void {
    }

}
