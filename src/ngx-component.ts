import { Component, ElementRef, Renderer2,
    ViewChild, ViewContainerRef, Input, DoCheck } from '@angular/core';

import { HijriService } from './ngx-hijri.service';
import { HijriJs, HijriDate } from 'hijri-js';

@Component({
    selector: 'hijri-js',
    template: `
        <span>
          <ng-content></ng-content>
        </span>
        <span>{{ dateHolder | hijri:splitter:formatDate}}</span>
    `,
    exportAs: 'hijri'
})
export class HijriComponent implements DoCheck {

    @Input('date') inputDate: string;

    @Input('format') formatDate: string;

    @Input('splitter') splitter: string = '/';

    private dateHolder: string;

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
