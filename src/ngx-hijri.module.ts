import { NgModule } from '@angular/core';
import { HijriService } from './ngx-hijri.service';
import { HijriComponent } from './ngx-component';
import { HijriDirective } from './ngx-hijri.directive';
import { HijriPipe } from './ngx-hijri.pipe';

@NgModule({
    declarations: [ HijriComponent, HijriDirective, HijriPipe ],
    providers: [ HijriService ],
    exports: [ HijriComponent, HijriDirective, HijriPipe ]
})
export class HijriModule {
}
