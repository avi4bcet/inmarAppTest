import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBinComponent } from './edit-bin.component';

describe('EditBinComponent', () => {
  let component: EditBinComponent;
  let fixture: ComponentFixture<EditBinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
