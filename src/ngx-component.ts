import { Component, ElementRef, Renderer2,
    AfterViewInit, ViewChild, ViewContainerRef, Input, DoCheck } from '@angular/core';

import { HijriService } from './ngx-hijri.service';
import { HijriJs, HijriDate } from 'hijri-js';

@Component({
    selector: 'hijri-js',
    template: `
        <span hijri-js="{{today}}">
          <ng-content></ng-content>
        </span> -
        <span>{{ today | hijriDate:'/':'full'}}</span>
    `,
    exportAs: 'hijri'
})
export class HijriComponent implements AfterViewInit, DoCheck {

    @Input('date') inputDate: string;

    today: string;

    constructor( private _elementRef: ElementRef,
                 private _renderer: Renderer2,
                 private _hijriService: HijriService) {
        const t = new Date();
        this.today = t.getDate() + '/' + t.getMonth() + '/' + t.getFullYear();
        console.log(' input date => ', this.inputDate);
    }

    ngAfterViewInit(): void {
        console.log(' input date => ', this.inputDate);
        console.log('const = elementRef == > ', this._elementRef.nativeElement);
    }

    ngDoCheck(): void {
        console.log(' input date => ', this.inputDate);
        if (this.inputDate) {
            this.today = this.inputDate;
        }
    }

}
