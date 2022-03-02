import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { DemandeNotPage } from '../demande-not/demande-not.page';
import { UserInfoService } from '../user-info/user-info.service';

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
  private activatedRoute: ActivatedRoute,
  private  user: UserInfoService,
  public popover: PopoverController,
  private route:Router,
  ) { }

  ngOnInit() {
    this.worker = this.user.getWorker();
    console.log(this.worker);
    
  this.dataUser=JSON.parse(localStorage.getItem('userData'));
  console.log(this.dataUser);
  
}
 
 async addDemande(person){
  //

  
    this.demande=
    {
      personnel: this.worker,
      utilisateur: this.dataUser
    }
    //fin de declaration
    this.user.saveUserData(this.demande).subscribe((data)=>{
      this.user.setWorker(null);
      console.log("insert...", data);
      this.onRetour();
      
    });

  }
  
  onRetour(){
    this.popover.dismiss();
  }
  
  


}
