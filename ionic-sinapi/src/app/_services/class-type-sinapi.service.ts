import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericHttpService } from './genericHttpService';
import { BehaviorSubject } from 'rxjs';
import { ClassTypeSinapi } from '../_models/class-type-sinapi-model';

@Injectable({ providedIn: 'root' })

export class ClassTypeSinapiService extends GenericHttpService<ClassTypeSinapi> {
    constructor(private http: HttpClient) {
        super(http);
    }

    getAllClassType() {
        return this.http.get<ClassTypeSinapi>(`${this.getUrlApi()}CompositionSinapi/getAllClassType`);
    }
    }
