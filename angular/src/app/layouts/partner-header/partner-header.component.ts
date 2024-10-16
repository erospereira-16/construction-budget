import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-partner-header',
  templateUrl: './partner-header.component.html'
})
export class PartnerHeaderComponent implements OnInit {
  public currentUser: any;
  constructor(  private authenticationService: AuthenticationService,
                private router: Router,
                private toastr: ToastrService) { }

  ngOnInit() {
    this.currentUser = this.authenticationService.getCurrentUser();
    if (!this.currentUser) {
      this.logout();
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['index']);
  }

  changePassword() {
    this.router.navigate(['/partner-area-change-password']);
  }  

}
