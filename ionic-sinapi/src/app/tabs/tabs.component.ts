import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ClassTypeSinapiService } from '../_services/class-type-sinapi.service';
import { ClassSinapi } from '../_models/class-sinapi-model';
import { TypeSinapi } from '../_models/type-sinapi-model';
import { IonLoadingService } from '../_services/ion-loading.service';
import { CompositionSinapiService } from '../_services/composition-sinapi.service';
import { FilterDefaultModel } from '../_models/filter-default-model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.scss']
})
export class TabsComponent { 
  isModalOpen = false;
  isOpen = false;
  classes: ClassSinapi[] = [];
types: TypeSinapi[] = [];

  constructor(
    private classTypeSinapiService: ClassTypeSinapiService,
    private compositionSinapiService: CompositionSinapiService,
    private navCtrl: NavController,
    private ionLoaderService: IonLoadingService,
  ) {}


  ionViewWillEnter() {
    this.ionLoaderService.simpleLoader().then(() => {
    this.classTypeSinapiService.getAllClassType()
    .subscribe((result) => {
        this.classes = result.classes;
        this.types = result.types;
        this.ionLoaderService.dismissLoader();
  })
});
  }

  openModal(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  openModalType(isOpen: boolean) {
    this.isOpen = isOpen;
  }

  filterByClass(item: ClassSinapi){
    const filter: FilterDefaultModel = new FilterDefaultModel();
    filter.classId = item.id;
    this.ionLoaderService.simpleLoader().then(() => {
    this.compositionSinapiService.getByFilter(filter) 
     .subscribe((result) => {
      this.openModal(false);
      this.ionLoaderService.dismissLoader(); 
})
  });

  }

  filterByType(item: TypeSinapi){
    const filter: FilterDefaultModel = new FilterDefaultModel();
    filter.typeId = item.id;
    this.ionLoaderService.simpleLoader().then(() => {
    this.compositionSinapiService.getByFilter(filter) 
     .subscribe((result) => {
      this.openModalType(false);
      this.ionLoaderService.dismissLoader(); 
})
  });

  }


}