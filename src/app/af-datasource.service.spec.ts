/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AFDatasourceService } from './af-datasource.service';

describe('Service: AFDatasource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AFDatasourceService]
    });
  });

  it('should ...', inject([AFDatasourceService], (service: AFDatasourceService) => {
    expect(service).toBeTruthy();
  }));
});
