import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericHttpService } from './genericHttpService';
import { BehaviorSubject } from 'rxjs';
import { TechnicalNotebook } from '../_models/technical-notebook-model';

@Injectable({ providedIn: 'root' })

export class TechnicalNotebookService extends GenericHttpService<TechnicalNotebook> {
    constructor(private http: HttpClient) {
        super(http);
    }

    getAllTechnicalNotebook() {
        return this.http.get<TechnicalNotebook[]>(`${this.getUrlApi()}CompositionSinapi/getAllTechnicalNotebook`);
    }
    }
