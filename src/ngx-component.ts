import { Component, ElementRef, Renderer2,
    ViewChild, ViewContainerRef, Input, DoCheck } from '@angular/core';

import { HijriService } from './ngx-hijri.service';
import { HijriJs, HijriDate } from 'hijri-js';

@Component({
    selector: 'h2g',
    template: `
        <span>{{ dateHolder | h2g:splitter:formatDate }}</span>
    `,
    exportAs: 'h2g'
})
export class H2GComponent implements DoCheck {

    @Input('date') inputDate: string;

    @Input('format') formatDate: string;

    @Input('splitter') splitter: string = '/';

    dateHolder: string;

    constructor( private _elementRef: ElementRef,
                 private _renderer: Renderer2,
                 private _hijriService: HijriService) {
        const t = new Date();
        this.dateHolder = t.getDate() + this.splitter +
                       + (t.getMonth() + 1) + this.splitter +
                        + t.getFullYear();
        this.dateHolder = _hijriService.convertToHijri(this.dateHolder, this.splitter).plain;
    }

    ngDoCheck(): void {
        if (this.inputDate) {
            this.dateHolder = this.inputDate;
        }
    }

}

@Component({
    selector: 'g2h',
    template: `
        <span>{{ dateHolder | g2h:splitter:formatDate }}</span>
    `,
    exportAs: 'g2h'
})
export class G2HComponent implements DoCheck {

    @Input('date') inputDate: string;

    @Input('format') formatDate: string;

    @Input('splitter') splitter: string = '/';

    dateHolder: string;

    constructor( private _elementRef: ElementRef,
                 private _renderer: Renderer2,
                 private _hijriService: HijriService) {
        const t = new Date();
        this.dateHolder = t.getDate() + this.splitter +
                       + (t.getMonth() + 1) + this.splitter +
                        + t.getFullYear();
    }

    ngDoCheck(): void {
        if (this.inputDate) {
            this.dateHolder = this.inputDate;
        }
    }

}
