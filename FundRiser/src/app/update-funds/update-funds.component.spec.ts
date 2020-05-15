import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFundsComponent } from './update-funds.component';

describe('UpdateFundsComponent', () => {
  let component: UpdateFundsComponent;
  let fixture: ComponentFixture<UpdateFundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
