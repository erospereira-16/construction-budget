import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FilterDefaultModel } from '../_models/filter-default-model';
import { IonLoadingService } from '../_services/ion-loading.service';
import { CompositionSinapiService } from '../_services/composition-sinapi.service';
import { CompositionSinapi } from '../_models/composition-sinapi-model';

@Component({
  selector: 'app-composition-sinapi-detail',
  templateUrl: './composition-sinapi-detail.page.html',
  styleUrls: ['./composition-sinapi-detail.page.scss'],
})
export class CompositionSinapiDetailPage implements OnInit {
  public compositionSinapiId: any;
  public compositionSinapi: any;

  constructor(private activatedRoute: ActivatedRoute, 
    private compositionSinapiService: CompositionSinapiService,
    private ionLoaderService: IonLoadingService,
    private router: Router,
    
  ) { }

  ngOnInit() {
    this.compositionSinapiId = this.activatedRoute.snapshot.paramMap.get('id');
    this.ionLoaderService.simpleLoader().then(()=>{
      this.compositionSinapiService.getById(Number(this.compositionSinapiId)).subscribe(result => {
      this.compositionSinapi = result;
      console.log(result);
      this.ionLoaderService.dismissLoader();
    });
  });
  }

}