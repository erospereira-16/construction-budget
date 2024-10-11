import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'src/app/_models/subscription-model';
import { forkJoin } from 'rxjs';
import { SubscriptionService } from 'src/app/_services/subscription.service';
import { PlanService } from 'src/app/_services/plan.service';
import { Plan } from 'src/app/_models/plan-model';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-subscription-page',
    templateUrl: 'subscription.page.html',
    styleUrls: ['subscription.page.scss'],
  })
  
export class SubscriptionPage implements OnInit {

  plans: Plan[] = [];
  form: any;
  public submitted = false;
  public subscription: Subscription = new Subscription();
  constructor(
    private router: Router,
    private subscriptionService: SubscriptionService,
    private planService: PlanService,
    private route: ActivatedRoute,) {
  }

  ngOnInit() {
      const plan = new FormControl('', Validators.compose([
        Validators.required,
      ]));
  
      this.form = new FormGroup({
        plan: plan,
      });  
  }

  ionViewWillEnter() {
    this.planService.getAllPlan()
    .subscribe((result: Plan[]) => {
        this.plans = result
  })
}

loadMercadoPago(user: any) {
  
}
}

