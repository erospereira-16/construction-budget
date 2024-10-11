import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericHttpService } from './genericHttpService';
import { BehaviorSubject } from 'rxjs';
import { CompositionSinapi } from '../_models/composition-sinapi-model';

@Injectable({ providedIn: 'root' })

export class CompositionSinapiService extends GenericHttpService<CompositionSinapi> {
    constructor(private http: HttpClient) {
        super(http);
    }

    getByFilter(filter: any) {
        return this.postAll('compositionSinapi/filter', filter);
      }

      getById(id: any) {
        return this.http.get<CompositionSinapi>(`${this.getUrlApi()}compositionSinapi/${id}`);
    }
}
