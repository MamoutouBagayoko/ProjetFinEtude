import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnexionService } from './connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  login: any;
  motpasse:any;
  private user:any;
  constructor( private route:Router, private service:ConnexionService) { }

  ngOnInit(): void {
  }
  onLogin(form:NgForm) {
    
    
    this.service.verifier(form.value['username'], form.value['password'])
      .subscribe(
        (data:any)=> {
          if (data!=null) {
            console.log(data);
            //localStorage.setItem('admin', data)
            localStorage.setItem('userData', JSON.stringify(data))
            
           this.route.navigate(['accueil']);
          }
        }
      )
  }
  demand(){
    this.route.navigate(['resgistre']);
  }
  

}
