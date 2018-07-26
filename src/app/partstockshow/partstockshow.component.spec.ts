import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartstockshowComponent } from './partstockshow.component';

describe('PartstockshowComponent', () => {
  let component: PartstockshowComponent;
  let fixture: ComponentFixture<PartstockshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartstockshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartstockshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
