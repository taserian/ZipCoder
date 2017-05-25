import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateRecordsComponent } from './state-records.component';

describe('StateRecordsComponent', () => {
  let component: StateRecordsComponent;
  let fixture: ComponentFixture<StateRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
