import { CompositionSinapiService } from './../_services/composition-sinapi.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { IonLoadingService } from '../_services/ion-loading.service';
import { NavController, ToastController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { FilterDefaultModel } from '../_models/filter-default-model';
import { ClassTypeSinapiService } from '../_services/class-type-sinapi.service';
import { ClassSinapi } from '../_models/class-sinapi-model';
import { TypeSinapi } from '../_models/type-sinapi-model';
import { CompositionSinapi } from '../_models/composition-sinapi-model';
import { TechnicalNotebook } from '../_models/technical-notebook-model';
import { TechnicalNotebookService } from '../_services/technical-notebook.service';
@Component({
  selector: 'app-sinapi-page',
  templateUrl: 'sinapi.page.html',
  styleUrls: ['sinapi.page.scss'],
})
export class SinapiPage implements OnInit {
form: any;
formDescription: any;
public lastPostalCode: any;
public status: any;
technicalNotebooks: TechnicalNotebook[] = [];
compositionSinapis: CompositionSinapi[] = [];
isModalOpen = false;
isOpen = false;
isOpenDescription = false;
isOpenCode = false;
public shoppingCartValue: number = 0;
submitted = false;
  constructor(
    private navCtrl: NavController,
    private ionLoaderService: IonLoadingService,
    private authenticationService: AuthService,
    private classTypeSinapiService: ClassTypeSinapiService,
    private technicalNotebookService: TechnicalNotebookService,
    private compositionSinapiService: CompositionSinapiService,
    public toastController: ToastController,
    private router: Router
  ) {}
  
  ngOnInit(): void {

    const code = new FormControl('', Validators.compose([
      Validators.required,
    ]));

    this.form = new FormGroup({
      code: code,
    });  

    const search = new FormControl('', Validators.compose([
      Validators.required,
    ]));

    this.formDescription = new FormGroup({
      search: search,
    });  

  }

  ionViewWillEnter() {
    this.authenticationService.getCurrentUser().then(data => this.goPageLogin(data));
    this.technicalNotebookService.getAllTechnicalNotebook()
    .subscribe((result) => {
        this.technicalNotebooks = result;
  })

  }

  async presentToast(error: any){
    const toast = await this.toastController.create({
      message: error,
      duration: 2000,
      position: 'middle'
    });

    toast.present();
  }

  goPageLogin(user: any) {
    if (user === null) {
      this.navCtrl.navigateForward(["login-page"]);
    }
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    let filterComposition = new FilterDefaultModel();
    filterComposition.search = event.target.value.toLowerCase();
    this.ionLoaderService.simpleLoader().then(() => {
      this.compositionSinapiService.getByFilter(filterComposition).subscribe(response => {
        if (response) {
        }
        this.ionLoaderService.dismissLoader();
      })  
    });

  }
  openModal(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  openModalCode(isOpen: boolean) {
    this.isOpenCode = isOpen;
    this.form.reset();
  }
  openModalDescription(isOpen: boolean) {
    this.isOpenDescription = isOpen;
    this.formDescription.reset();
  }


  filterByTechnicalNotebook(item: TechnicalNotebook){
    this.openModal(false);
    const filter: FilterDefaultModel = new FilterDefaultModel();
    filter.technicalNotebookId = item.id;
    this.ionLoaderService.simpleLoader().then(() => {
    this.compositionSinapiService.getByFilter(filter) 
     .subscribe((result) => {
      this.ionLoaderService.dismissLoader(); 
      this.compositionSinapis = result;

})
  });

  }

  filterByCode(){
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const filter: FilterDefaultModel = new FilterDefaultModel();
    filter.code = this.form.controls.code.value;
    this.ionLoaderService.simpleLoader().then(() => {
    this.compositionSinapiService.getByFilter(filter) 
     .subscribe((result) => {
      this.openModalCode(false);
      this.ionLoaderService.dismissLoader(); 
      this.compositionSinapis = result;
})
  });

  }

  filterByDescription(){
    this.submitted = true;
    if (this.formDescription.invalid) {
      return;
    }
    const filter: FilterDefaultModel = new FilterDefaultModel();
    filter.search = this.formDescription.controls.search.value;
    this.ionLoaderService.simpleLoader().then(() => {
    this.compositionSinapiService.getByFilter(filter) 
     .subscribe((result) => {
      this.openModalDescription(false);
      this.ionLoaderService.dismissLoader(); 
      this.compositionSinapis = result;
})
  });

  }


  onDetail(compositionSinapi: any) {
    this.navCtrl.navigateForward(["composition-sinapi-detail", compositionSinapi.id]);
  }

}
