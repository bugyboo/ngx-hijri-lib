import { Component } from '@angular/core';
import { HijriService } from '../../src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';

  constructor( private service: HijriService ) {
    this.title = service.getToday().full;
  }

}
