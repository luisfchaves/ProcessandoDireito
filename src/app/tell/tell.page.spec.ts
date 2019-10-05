import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TellPage } from './tell.page';

describe('TellPage', () => {
  let component: TellPage;
  let fixture: ComponentFixture<TellPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TellPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
