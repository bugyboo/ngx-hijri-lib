import { Component, ElementRef, Renderer2,
    AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';

import { HijriService } from './ngx-hijri.service';
import { HijriJs, HijriDate } from 'hijri-js';

@Component({
    selector: 'hijri-js',
    template: `
        <ng-content></ng-content>
        <span #hijri>{{text}}</span>
    `,
    exportAs: 'hijri'
})
export class HijriComponent implements AfterViewInit {

    @ViewChild('hijri', {read: ViewContainerRef}) content: ViewContainerRef;

    title = 'YoYo!!';

    oldText: string;

    text: string = 'N/A';

    constructor( private _elementRef: ElementRef,
                 private _renderer: Renderer2,
                 private _hijriService: HijriService) {
    }

    ngAfterViewInit(): void {
        this.oldText = this._elementRef.nativeElement.outerText;
        console.log('const = elementRef == > ', this._elementRef.nativeElement.outerText);
        console.log('After = ViewContainer == > ', this.content.element.nativeElement);
        console.log(' Outer Text = ', this.oldText);
        this.text = this._hijriService.convertToHijri(this.oldText, '/').plain;
    }

}
