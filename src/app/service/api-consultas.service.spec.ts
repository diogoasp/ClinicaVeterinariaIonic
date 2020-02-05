import { TestBed } from '@angular/core/testing';

import { ApiConsultasService } from './api-consultas.service';

describe('ApiConsultasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiConsultasService = TestBed.get(ApiConsultasService);
    expect(service).toBeTruthy();
  });
});
