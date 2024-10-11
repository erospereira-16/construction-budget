import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from './_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public account: any;

  constructor(    
    private navCtrl: NavController,
    private authenticationService: AuthService,
    private router: Router) {}

  onMenu(nav: Number) {
    switch (nav) {
      case 1:
        this.navCtrl.navigateForward(["account"]);
        break;
      case 2:
        this.navCtrl.navigateForward(["about"]);
        break;
        case 3:
          this.authenticationService.clearCurrentUser();
          this.router.navigate(['/login-page'])
          break;  
          case 4:
            this.navCtrl.navigateForward(['/subscription'])
            break;  
  
  
    }
   
  }
  ngOnInit(): void {

    this.authenticationService.getCurrentUser().then(data => this.userData(data));


  }

  ionViewWillEnter() {
  }

  userData(user: any) {
    if (user != null) {
      this.account = user;
    }
  }

}


