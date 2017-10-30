import { NgModule } from '@angular/core';
import { HijriService } from './ngx-hijri.service';
import { H2GComponent, G2HComponent } from './ngx-component';
import { ToHijriPipe, ToGregorianPipe } from './ngx-hijri.pipe';

@NgModule({
    declarations: [ H2GComponent, G2HComponent, ToHijriPipe, ToGregorianPipe ],
    providers: [ HijriService ],
    exports: [ H2GComponent, G2HComponent, ToHijriPipe, ToGregorianPipe ]
})
export class HijriModule {
}
