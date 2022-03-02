import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PopoverController, ToastController } from '@ionic/angular';
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
  test: any;
  constructor( private route:Router,
       private service:ConnexionService,
       public popover: PopoverController,
             private toastCrtl : ToastController,
       ) { }

  ngOnInit(): void {
    
  }
  onLogin(form:NgForm) {
    
    
    this.service.verifier(form.value['username'], form.value['password'])
      .subscribe(
        (data:any)=> {
          if (data!=null) {
            console.log("un data", data);
            //localStorage.setItem('admin', data)
            this.showToaster();
            localStorage.setItem('userData', JSON.stringify(data))
            
            this.popover.dismiss();
           //this.route.navigate(['personnel-detail']);
          }
        }
      )
  }
  demand(){
    this.route.navigate(['resgistre']);
  }
  //pour afficher le message de notification 
  async showToaster(){
    // this.notifyService.showSuccess("Data shown successfully !!", "Notification")
    const toast = await this.toastCrtl.create({
      message:'connexion ok',
      duration:2000,
      position:"top",
      color: "success"
    });
    
    toast.present();
      
}


  

}
