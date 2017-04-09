import { TestBed, inject } from '@angular/core/testing';

import { GradeRecordService } from './grade-record.service';

describe('GradeRecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GradeRecordService]
    });
  });

  it('should ...', inject([GradeRecordService], (service: GradeRecordService) => {
    expect(service).toBeTruthy();
  }));
});
