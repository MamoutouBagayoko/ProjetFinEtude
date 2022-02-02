import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PresenceComponent } from './presence/presence.component';
import { RegistreComponent } from './registre/registre.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path : '' , redirectTo : '/login' , pathMatch : 'full'},
  
  {
    path: 'login',component: LoginComponent
    
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
    path: 'update/:id'
    ,component: UpdateComponent
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
