import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompositionSinapiDetailPage } from './composition-sinapi-detail.page';
import { CompositionSinapiDetailModule } from './composition-sinapi-detail.module';

const routes: Routes = [
  {
    path: '',
    component: CompositionSinapiDetailPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompositionSinapiDetailPageRoutingModule {}
