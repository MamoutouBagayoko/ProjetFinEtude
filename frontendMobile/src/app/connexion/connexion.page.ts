import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PopoverController, ToastController } from '@ionic/angular';
import { ConnexionService } from './connexion.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  // pauseSeconnecter!:boolean;
  // pauseSedeconnecter!:boolean;
  login: any;
  motpasse:any;
  private user:any;
  test: any;
  constructor( private route:Router,
       private service:ConnexionService,
       public popover: PopoverController,
       
       ) { }

  ngOnInit(): void {
    
  }
  onLogin(form:NgForm) {
    
    this.service.verifier(form.value['username'], form.value['password'])
      .subscribe(
        (data:any)=> {
          if (data!=null) {
            console.log("un data", data);
            localStorage.setItem('user', data)
           // this.pauseSedeconnecter=true;
            // this.pauseSeconnecter=false;
            //this.showToaster();
            Swal.fire({
              title: 'CONNEXION!',
              text:   "Connexion ok !",
              icon: 'success'
            });
             //this.route.navigateByUrl("/accueil")
            localStorage.setItem('userData', JSON.stringify(data))
            
            this.popover.dismiss();
           //this.route.navigate(['personnel-detail']);
          }else{
            // this.pauseSeconnecter=true;
            // this.pauseSedeconnecter=false;
            Swal.fire({
              title: 'CONNEXION!',
              text:   "Information non correcte !",
              icon: 'error'
              
            });
            
          }
        }
      )
  }
  demand(){
    this.route.navigate(['resgistre']);
  }
}