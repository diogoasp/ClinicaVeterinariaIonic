import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormAnimaisPage } from './form-animais.page';

describe('FormAnimaisPage', () => {
  let component: FormAnimaisPage;
  let fixture: ComponentFixture<FormAnimaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAnimaisPage ],
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
