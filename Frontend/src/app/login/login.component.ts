import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './loginservice.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: any;
  motpasse:any;
  private user:any;
  constructor( private route:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }
  onLogin(loginForm:any) {
    this.service.verifier(loginForm.value['login'], loginForm.value['motpasse'])
      .subscribe(
        (data:any)=> {
          if (data!=null) {
            //localStorage.setItem('admin', data)
            Swal.fire({
              title: 'CONNEXION!',
              text:   "Connexion ok !",
              icon: 'success'
            });
            localStorage.setItem('userData', JSON.stringify(data))
            
           this.route.navigateByUrl('presence');
          }
          else{
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
