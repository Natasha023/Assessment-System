import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeRecordComponent } from './grade-record.component';

describe('GradeRecordComponent', () => {
  let component: GradeRecordComponent;
  let fixture: ComponentFixture<GradeRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
