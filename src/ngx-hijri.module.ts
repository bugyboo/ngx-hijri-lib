import { NgModule } from '@angular/core';
import { HijriService } from './ngx-hijri.service';
import { HijriComponent } from './ngx-component';
import { HijriDirective } from './ngx-hijri.directive';

@NgModule({
    declarations: [ HijriComponent, HijriDirective ],
    providers: [ HijriService ],
    exports: [ HijriComponent, HijriDirective ]
})
export class HijriModule {
}
