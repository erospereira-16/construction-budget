import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompositionSinapiDetailPage } from './composition-sinapi-detail.page';

describe('CompositionSinapiDetailPage', () => {
  let component: CompositionSinapiDetailPage;
  let fixture: ComponentFixture<CompositionSinapiDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompositionSinapiDetailPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompositionSinapiDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
