import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PresenceComponent } from './presence/presence.component';
import { RegistreComponent } from './registre/registre.component';
import { UpdateComponent } from './update/update.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { UserComponent } from './user/user.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProfitUserComponent } from './profit-user/profit-user.component';
import { InfodemandeurComponent } from './infodemandeur/infodemandeur.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { CorbeilleComponent } from './corbeille/corbeille.component';
import { AuthificatedGuard } from './authificated.guard';
const routes: Routes = [
  {path : '' , redirectTo : '/login' , pathMatch : 'full'},
  
  {
    path: 'login',component: LoginComponent,
    canActivate:[AuthificatedGuard],
    
  },
  {
    path: 'user',component: UserComponent
    
  },
  {
    path: 'corbeille',component: CorbeilleComponent
    
  },
  {
    path: 'infodemandeur/:id',component: InfodemandeurComponent
    
  },
  {
    path: 'addAdmin',component: AddAdminComponent
    
  },
 {
    path:'categorie',component:CategorieComponent
 },
  {
    path: 'forgotpassword'
    ,component: ForgotpasswordComponent
    
  },
  {
    path: 'main'
    ,component: MainComponent
    
  },
  {
    path: 'registre'
    ,component: RegistreComponent
    
  },
  {
    path: 'presence'
    ,component: PresenceComponent
    
  },
  {
    path: 'personnel'
    ,component: PersonnelComponent
    
  },
  {
    path: 'update/:id'
    ,component: UpdateComponent
    
  },
  {
    path: 'profit-user'
    ,component: ProfitUserComponent
    
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
