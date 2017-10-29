import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HijriModule } from '../../src';
import { AppComponent } from './app.component';

describe('HijriComponent', () => {
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HijriModule
      ],
      providers: [ ]
    }).compileComponents();
  }));

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  it('should create the app', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have app title "app works!"', async(() => {
    expect(app.title).toEqual('app works!');
  }));

  it('should have today is equalt to"', async(() => {
    const de = fixture.debugElement.query(By.css('.todayis'));
    expect(de.parent.nativeElement.textContent).toEqual('today');
  }));

});

/*
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HijriComponent } from './ngx-component';

describe('', () => {

    let comp: HijriComponent;
    let fixture: ComponentFixture<HijriComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ HijriComponent ]
        });

        fixture = TestBed.createComponent(HijriComponent);

        comp = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('c3'));
        el = de.nativeElement;

    })
})
*/
