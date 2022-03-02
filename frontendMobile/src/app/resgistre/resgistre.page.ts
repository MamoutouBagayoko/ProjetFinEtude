import { Component, OnInit } from '@angular/core';
//importations
import {HttpClient} from '@angular/common/http';
import { PopoverController, ToastController} from '@ionic/angular';
import { RegistreService } from './registre.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resgistre',
  templateUrl: './resgistre.page.html',
  styleUrls: ['./resgistre.page.scss'],
})
export class ResgistrePage implements OnInit {
  photo: File
  id: any;
  utilisateur:any;

  constructor(private readonly http: HttpClient,
    public popover: PopoverController,
    public service:RegistreService,
    private toastCrtl: ToastController,
    private route:Router
    ) { }

  ngOnInit() {
   // this.popover.dismiss();
  }

  lire(event){
    this.photo = event.target.files[0];
  }
 
  registre(form: NgForm){
    console.log(form.value);
    this.service.saveUtiliseurData(form.value,this.photo).subscribe((dt: any)=>{
      console.log(form.value.nom);
      dt.nom = form.value.nom,
      dt.prenom = form.value.prenom,
      dt.age = form.value.age,
      dt.email = form.value.email,
      dt.genre = form.value.genre,
      dt.login = form.value.login,
      dt.matrimoliale = form.value.matrimoliale,
      dt.motpass = form.value.motpass,
      dt.numphone = form.value.numphone,
      dt.photo = form.value.photo,
      dt.profession = form.value.profession,
      dt.adresse = form.value.adresse,
      dt.nbrenfant = form.value.nbrenfant,

      this.service.updateUtiliseurData(dt.id, dt).subscribe((data:any) =>{
        console.log(data);
      })
      this.showToaster();
      localStorage.setItem("userData",JSON.stringify(form.value));
      this.route.navigate(['accueil']);
      
    })
      
  }
  // pour afficher le message de notification 
   async showToaster(){const toast = await this.toastCrtl.create({
    message:'connexion ok',
    duration:2000,
    position:"top",
    color: "success"
  });
  
  toast.present();
    
}


  

}
