import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SinapiPage } from './sinapi.page';
import { SinapiRoutingModule } from './sinapi-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SinapiRoutingModule
  ],
  declarations: [SinapiPage]
})
export class SinapiModule {}
