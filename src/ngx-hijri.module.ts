import { NgModule } from '@angular/core';
import { HijriService } from './ngx-hijri.service';
import { HijriComponent } from './ngx-component';
import { HijriDirective } from './ngx-hijri.directive';
import { ToHijriPipe, ToGregorianPipe } from './ngx-hijri.pipe';

@NgModule({
    declarations: [ HijriComponent, HijriDirective, ToHijriPipe, ToGregorianPipe ],
    providers: [ HijriService ],
    exports: [ HijriComponent, HijriDirective, ToHijriPipe, ToGregorianPipe ]
})
export class HijriModule {
}
