import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, BehaviorSubject, from } from 'rxjs';
import { catchError, filter, take, switchMap, finalize } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/login-user-model';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { IonLoadingService } from '../_services/ion-loading.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private AUTH_HEADER = 'Authorization';
  private token: any;
  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private isRefreshing = false;
  constructor(private authenticationService: AuthService,
    private router: Router,
    private ionLoaderService: IonLoadingService,
    private navCtrl: NavController,
    public toastController: ToastController,) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.authenticationService.getCurrentUser())
    .pipe(
      switchMap(user => {
        if (user !== null) {
          req = req.clone({
            headers: req.headers.set(this.AUTH_HEADER, 'bearer ' + user.token)
          });
        }
        return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.dismissOverlays();
          this.authenticationService.clearCurrentUser()
          this.router.navigate(["/login-page"])
          // return this.handle401Error(user,req,next)
      }

      if (error.status === 400) {
        // if(error.error === 'Assinatura expirada' ){
        //   this.router.navigate(['/subscription']);
        // }
        this.presentToast(error.error);
    }

          return throwError(error);

      })
    );

      })
  );
  }

  private handle401Error(user: any,request: HttpRequest<any>, next: HttpHandler) {
            this.navCtrl.navigateBack(["login-page"]);
            return next.handle(request);
          }

  async presentToast(error: any){
    const toast = await this.toastController.create({
      message: error,
      duration: 2000,
      position: 'middle'
    });

    toast.present();
  }

  async dismissOverlays() {
    await this.ionLoaderService.dismissLoader(); 
  }
}