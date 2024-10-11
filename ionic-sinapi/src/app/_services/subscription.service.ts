import { Subscription } from '../_models/subscription-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericHttpService } from './genericHttpService';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class SubscriptionService extends GenericHttpService<Subscription> {
    constructor(private http: HttpClient) {
        super(http);
    }

    getByFilter(filter: any) {
        return this.postAll('subscription/filter', filter);
      }

    deleteById(entity: any) {
      return this.post('Subscription/delete', entity);
  }

 save(entity: any) {
    return this.post('subscription/save', entity);
 }

}
