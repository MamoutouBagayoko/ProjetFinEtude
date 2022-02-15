import { Component, OnInit } from '@angular/core';
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
  onLogin(loginForm:any) {
    this.service.verifier(loginForm.value['login'], loginForm.value['motpass'])
      .subscribe(
        (data:any)=> {
          if (data!=null) {
            //localStorage.setItem('admin', data)
            localStorage.setItem('userData', JSON.stringify(data))
            
           this.route.navigateByUrl('main');
          }
        }
      )
  }
  demand(){
    this.route.navigateByUrl("resgistre");
  }
  

}
