import { TestBed } from '@angular/core/testing';

import { ApiAnimalService } from './api-animais.service';

describe('ApiAnimalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiAnimalService = TestBed.get(ApiAnimalService);
    expect(service).toBeTruthy();
  });
});
