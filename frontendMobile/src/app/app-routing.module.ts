import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pagedemarrage/pagedemarrage.module').then( m => m.PagedemarragePageModule)
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'pagedemarrage',
    pathMatch: 'full'
  },
  {
    path: 'detail',
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
  {
    path: 'message-confir',
    loadChildren: () => import('./message-confir/message-confir.module').then( m => m.MessageConfirPageModule)
  },
  
  {
    path: 'mot-passe-oublier',
    loadChildren: () => import('./mot-passe-oublier/mot-passe-oublier.module').then( m => m.MotPasseOublierPageModule)
  },
  {
    path: 'connexion-accueil',
    loadChildren: () => import('./connexion-accueil/connexion-accueil.module').then( m => m.ConnexionAccueilPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./Notifications/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'detail-notification/:id',
    loadChildren: () => import('./Notifications/detail-notification/detail-notification.module').then( m => m.DetailNotificationPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
