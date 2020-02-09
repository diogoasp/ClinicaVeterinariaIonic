import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormConsultasPage } from './form-consultas.page';
describe('FormConsultasPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FormConsultasPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(FormConsultasPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=form-consultas.page.spec.js.map