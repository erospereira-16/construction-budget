import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: TabsComponent,
  //   children: [
  //     {
  //       path: '',
  //       pathMatch: 'full',
  //       redirectTo: 'home',
  //     },
  //     {
  //       path: 'sinapi',
  //       loadChildren: () => import('./sinapi/sinapi.module').then( m => m.SinapiModule)
  //     },
  //     {
  //       path: 'home',
  //       loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
  //     },
  //     {
  //       path: 'about',
  //       loadChildren: () => import('./about/about.module').then( m => m.AboutModule)
  //     },
  //     {
  //       path: 'subscription',
  //       loadChildren: () => import('./subscription/subscription.module').then( m => m.SubscriptionModule)
  //     },
  //   ]
  //   },  

  // {
  //   path: '',
  //   component: TabsComponent,
  //   children: [
  //     {
  //       path: '',
  //       pathMatch: 'full',
  //       redirectTo: 'sinapi',
  //     },
  //     // {
  //     //   path: 'home',
  //     //   loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
  //     // },
  //     // {
  //     //   path: 'about',
  //     //   loadChildren: () => import('./about/about.module').then( m => m.AboutModule)
  //     // },
  //     // {
  //     //   path: 'subscription',
  //     //   loadChildren: () => import('./subscription/subscription.module').then( m => m.SubscriptionModule)
  //     // },
  //   ]
  // },


  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'sinapi',
        loadChildren: () => import('./sinapi/sinapi.module').then(m => m.SinapiModule)
      },
      {
        path: 'composition-sinapi-detail/:id',
        loadChildren: () => import('./composition-sinapi-detail/composition-sinapi-detail.module').then(m => m.CompositionSinapiDetailModule)
      },
      {
        path: 'login-page',
        loadChildren: () => import('./login-page/login.module').then(m => m.LoginModule)
      },
      {
        path: 'subscription',
        loadChildren: () => import('./subscription/subscription.module').then(m => m.SubscriptionModule)
      },


    ]
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
