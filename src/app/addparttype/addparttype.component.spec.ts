import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddparttypeComponent } from './addparttype.component';

describe('AddparttypeComponent', () => {
  let component: AddparttypeComponent;
  let fixture: ComponentFixture<AddparttypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddparttypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddparttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
