import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ConsultationPage } from './consultation.page';
describe('ConsultationPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ConsultationPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ConsultationPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=consultation.page.spec.js.map