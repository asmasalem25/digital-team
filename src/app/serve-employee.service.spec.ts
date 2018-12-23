import { TestBed } from '@angular/core/testing';

import { ServeEmployeeService } from './serve-employee.service';

describe('ServeEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServeEmployeeService = TestBed.get(ServeEmployeeService);
    expect(service).toBeTruthy();
  });
});
