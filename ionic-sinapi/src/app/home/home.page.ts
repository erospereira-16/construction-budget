import { CompositionSinapiService } from '../_services/composition-sinapi.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { IonLoadingService } from '../_services/ion-loading.service';
import { NavController, ToastController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { FilterDefaultModel } from '../_models/filter-default-model';
@Component({
  selector: 'app-home-page',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
form: any;
public lastPostalCode: any;
public status: any;
isModalOpen = false;
public shoppingCartValue: number = 0;
submitted = false;
  constructor(
    private navCtrl: NavController,
    private ionLoaderService: IonLoadingService,
    private authenticationService: AuthService,
    private compositionSinapiService: CompositionSinapiService,
    public toastController: ToastController,
    private router: Router
  ) {}
  
  ngOnInit(): void {

  }

  ionViewWillEnter() {
    this.authenticationService.getCurrentUser().then(data => this.goPageLogin(data));

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
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  goSinapi() {
      this.navCtrl.navigateForward(["sinapi"]);
    }


}
