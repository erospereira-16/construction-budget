import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubscriptionPage } from './subscription.page';
import { SubscriptionRoutingModule } from './subscription-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SubscriptionRoutingModule
  ],
  declarations: [SubscriptionPage]
})
export class SubscriptionModule {}
