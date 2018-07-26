import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbinComponent } from './addbin.component';

describe('AddbinComponent', () => {
  let component: AddbinComponent;
  let fixture: ComponentFixture<AddbinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
