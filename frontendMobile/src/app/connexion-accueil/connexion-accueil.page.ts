import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnexionService } from '../connexion/connexion.service';

@Component({
  selector: 'app-connexion-accueil',
  templateUrl: './connexion-accueil.page.html',
  styleUrls: ['./connexion-accueil.page.scss'],
})
export class ConnexionAccueilPage implements OnInit {
  pauseSeconnecter!:boolean;
  pauseSedeconnecter!:boolean;
  login: any;
  motpasse:any;
  private user:any;
  test: any;

  constructor(
    private route:Router,
    private service:ConnexionService,
  ) { }

  ngOnInit() {
    
  }
  onLogin(form:NgForm) {
    
    this.service.verifier(form.value['username'], form.value['password'])
      .subscribe(
        (data:any)=> {
          if (data!=null) {
            console.log("un data", data);
            localStorage.setItem('user', data)
            //this.pauseSedeconnecter=true;
            //this.showToaster();
            Swal.fire({
              title: 'CONNEXION!',
              text:   "Connexion ok !",
              icon: 'success'
            });
          
            this.route.navigateByUrl("/accueil")
            localStorage.setItem('userData', JSON.stringify(data))
            //this.pauseSeconnecter=false;
          }else{
            
            Swal.fire({
              title: 'CONNEXION!',
              text:   "Information non correcte !",
              icon: 'error'
              
            });
          }
        }
      )
  }

}
