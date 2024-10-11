import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompositionSinapiDetailPage } from './composition-sinapi-detail.page';
import { CompositionSinapiDetailPageRoutingModule } from './composition-sinapi-detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CompositionSinapiDetailPageRoutingModule
  ],
  declarations: [CompositionSinapiDetailPage]
})
export class CompositionSinapiDetailModule {}
