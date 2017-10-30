import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

import { HijriService } from './ngx-hijri.service';

@Directive({
    selector: '[h2g]',
    exportAs: 'h2g'
})
export class HijriDirective implements AfterViewInit {

    @Input('hijri-js') inputDate: string;

    constructor( private _hijriService: HijriService,
                 private _elementRef: ElementRef) {
    }

    ngAfterViewInit(): void {
        console.log('No implementations yet!', this.inputDate);
    }

}
