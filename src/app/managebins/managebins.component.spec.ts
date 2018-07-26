import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagebinsComponent } from './managebins.component';

describe('ManagebinsComponent', () => {
  let component: ManagebinsComponent;
  let fixture: ComponentFixture<ManagebinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagebinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagebinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
