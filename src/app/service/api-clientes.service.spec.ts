import { TestBed } from '@angular/core/testing';

import { ApiClientesService } from './api-clientes.service';

describe('ApiClientesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiClientesService = TestBed.get(ApiClientesService);
    expect(service).toBeTruthy();
  });
});
