import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormClientesPage } from './form-clientes.page';
describe('FormClientesPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FormClientesPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(FormClientesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=form-clientes.page.spec.js.map