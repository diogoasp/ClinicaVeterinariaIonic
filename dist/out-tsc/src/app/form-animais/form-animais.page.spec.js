import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormAnimaisPage } from './form-animais.page';
describe('FormAnimaisPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FormAnimaisPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(FormAnimaisPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=form-animais.page.spec.js.map