import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { MainComponent } from './main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistreComponent } from './registre/registre.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PresenceComponent } from './presence/presence.component';
//importation
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSliderModule } from '@angular/material/slider';
import { UserComponent } from './user/user.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProfitUserComponent } from './profit-user/profit-user.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { InfodemandeurComponent } from './infodemandeur/infodemandeur.component';
import { CorbeilleComponent } from './corbeille/corbeille.component';
import {Ng2SearchPipeModule} from'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotpasswordComponent,
    MainComponent,
    RegistreComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    PresenceComponent,
    UpdateComponent,
    PersonnelComponent,
    UserComponent,
    CategorieComponent,
    ProfitUserComponent,
    AddAdminComponent,
    InfodemandeurComponent,
    CorbeilleComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatSliderModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
