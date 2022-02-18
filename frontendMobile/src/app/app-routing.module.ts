import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pagedemarrage/pagedemarrage.module').then( m => m.PagedemarragePageModule)
  },
  {
    path: 'homme',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'pagedemarrage',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'resgistre',
    loadChildren: () => import('./resgistre/resgistre.module').then( m => m.ResgistrePageModule)
  },
  {
    path: 'personnel-detail/:id',
    loadChildren: () => import('./personnel-detail/personnel-detail.module').then( m => m.PersonnelDetailPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'user-info/:id',
    loadChildren: () => import('./user-info/user-info.module').then( m => m.UserInfoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
