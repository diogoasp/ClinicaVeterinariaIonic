import { TestBed } from '@angular/core/testing';
import { ApiAnimalService } from './api-animais.service';
describe('ApiAnimalService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(ApiAnimalService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=api-animais.service.spec.js.map