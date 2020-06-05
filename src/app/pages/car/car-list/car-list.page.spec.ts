import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarListPage } from './car-list.page';

describe('CarListPage', () => {
  let component: CarListPage;
  let fixture: ComponentFixture<CarListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
