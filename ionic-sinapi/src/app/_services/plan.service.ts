import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericHttpService } from './genericHttpService';
import { Plan } from '../_models/plan-model';

@Injectable({ providedIn: 'root' })

export class PlanService extends GenericHttpService<Plan> {
    constructor(private http: HttpClient) {
        super(http);
    }

    getAllPlan() {
        return this.http.get<Plan[]>(`${this.getUrlApi()}PlanSinapi/getAll`);
    }
}
