import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GenericHttpService } from './genericHttpService';
import { Preferences } from '@capacitor/preferences';
import { User } from '../_models/login-user-model';

@Injectable({ providedIn: 'root' })
export class AuthService extends GenericHttpService<any>{
    protected baseUrl = `${environment.urlApi}`;
    protected baseSite = `${environment.urlApi}`;

    constructor(private http: HttpClient) {
        super(http);
    }

    
async setCurrentUser(value: any) {
    await Preferences.set({ key: 'delivery_user', value: JSON.stringify(value) });
  }
  
  async getCurrentUser() {
    const ret = await Preferences.get({ key: 'delivery_user' });
    return JSON.parse(ret.value!!);
  }

  getUser() {
    return this.http.get(`${this.getUrlApi()}UserSinapi`);
}


  createCode(user: any) {
    return this.post('userSinapi/createCode', user);
}
  
  async clearCurrentUser() {
    await Preferences.remove({ key: 'delivery_user' });
  }

loginByCode(loginUser: User) {
  return this.post('userSinapi/loginByCodePartner', loginUser);
}

updateAccount(loginUser: User) {
  return this.post('userSinapi/update', loginUser);
}

refreshToken(loginUser: User) {
  return this.post('userSinapi/refreshToken', loginUser);
}



}