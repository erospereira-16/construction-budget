import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonLoadingService } from '../_services/ion-loading.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { MaskitoOptions, MaskitoElementPredicate } from '@maskito/core';
import { AuthService } from '../_services/auth.service';
@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss'],
})
export class AccountPage implements OnInit {
  public lastPostalCode: any;
  readonly phoneMask: MaskitoOptions = {
    mask: [/\d/, /\d/, /\d/,/\d/, /\d/, '-', /\d/, /\d/, /\d/],
  };
  readonly maskPredicate: MaskitoElementPredicate = async (el) => (el as HTMLIonInputElement).getInputElement();

  form: any;
  submitted = false;
  public account: any;
  public title: string | undefined;
  constructor(
    private navCtrl: NavController,
    private ionLoaderService: IonLoadingService,
    private authenticationService: AuthService,
    private router: Router
  ) {}
  
  ngOnInit(): void {



  }

  ionViewWillEnter() {
    this.ionLoaderService.simpleLoader().then(() => {
      this.authenticationService.getUser()
      .subscribe((result) => {
        this.account = result;
          this.ionLoaderService.dismissLoader();
    })
  });  
  }
  

}
