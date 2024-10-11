import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericHttpService } from './genericHttpService';
import { BehaviorSubject } from 'rxjs';
import { ClassSinapi } from '../_models/class-sinapi-model';

@Injectable({ providedIn: 'root' })

export class ClassSinapiService extends GenericHttpService<ClassSinapi> {
    constructor(private http: HttpClient) {
        super(http);
    }

    getAllclass() {
        return this.http.get<ClassSinapi[]>(`${this.getUrlApi()}compositionSinapi/getAllClass`);
      }
}
