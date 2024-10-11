import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinapiPage } from './sinapi.page';

describe('SinapiPage', () => {
  let component: SinapiPage;
  let fixture: ComponentFixture<SinapiPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SinapiPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinapiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
