import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

import { HijriService } from './ngx-hijri.service';

@Directive({
    selector: '[hijri-js]',
    exportAs: 'ngxHijriJs'
})
export class HijriDirective implements AfterViewInit {

    @Input('hijri-js') inputDate: string;

    constructor( private _hijriService: HijriService,
                 private _elementRef: ElementRef) {
    }

    ngAfterViewInit(): void {
        console.log(' directive called...', this.inputDate);
    }

}
