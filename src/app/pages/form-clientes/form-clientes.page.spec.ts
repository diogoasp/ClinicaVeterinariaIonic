import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormClientesPage } from './form-clientes.page';

describe('FormClientesPage', () => {
  let component: FormClientesPage;
  let fixture: ComponentFixture<FormClientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormClientesPage ],
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
