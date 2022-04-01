import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { AlertController, LoadingController, PopoverController } from '@ionic/angular';
import { UserInfoService } from '../user-info/user-info.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-message-confir',
  templateUrl: './message-confir.page.html',
  styleUrls: ['./message-confir.page.scss'],
})
export class MessageConfirPage implements OnInit {
  person:any;
  worker: any;
  idUser:any;
  dataUser:any;
  categorie:any;
  idPerson: any;
  demande: { personnel: any; utilisateur: any; };
  constructor(
  private  user: UserInfoService,
  private popover: PopoverController,
  private route:Router,
  private alertController: AlertController,
  public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.worker = this.user.getWorker();
    console.log(this.worker);
    
  this.dataUser=JSON.parse(localStorage.getItem('userData'));
  console.log(this.dataUser);
  
}
//notificatin du message
// async presentAlert(){
//   const alert = await this.alertController.create({
//     subHeader: 'Succès',
//     message: 'Votre demande a été prise en compte !',
//     buttons: ['ok']
//   });
//   await alert.present();
// }
openmodal()
  {
    Swal.fire({
      title: 'DEMANDE!!',
      text:   "Votre demande a été prise en compte !",
      icon: 'success'
    });
  }

  async presentLoadingWithOptions() {
    
  }
 
async addDemande(person){ 
  const loading = await this.loadingController.create({
    message: 'Patientez...',
    mode: 'ios',
    translucent: true,
    cssClass: 'custom-class custom-loading'
  });
  await loading.present();
    this.demande=
    {
      personnel: this.worker,
      utilisateur: this.dataUser
    }
    //fin de declaration
    this.user.saveUserData(this.demande).subscribe((data)=>{
      this.user.setWorker(null);
      console.log("insert...", data);
      loading.dismiss()
      this.popover.dismiss();
     //this.presentAlert();
     //this.presentLoadingWithOptions()
     this.openmodal();
    });
    
  
  }

  
  
  onRetour(){
    this.popover.dismiss();
  }
  

  
  


}
