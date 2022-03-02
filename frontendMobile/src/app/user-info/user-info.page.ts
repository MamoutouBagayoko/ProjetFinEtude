import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { UserInfoService } from './user-info.service';
import { PopoverController } from '@ionic/angular';
import { ConnexionPage } from '../connexion/connexion.page';
import { MessageConfirPage } from '../message-confir/message-confir.page';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {
  idPerson: any;
  demande: { personnel: any; utilisateur: any; };
  constructor(
    private activatedRoute: ActivatedRoute,
    private  user: UserInfoService,
    public popover: PopoverController,
    private route:Router,
  
  ) { }
  person:any;
  idUser:any;
  dataUser:any;
  categorie:any;


  ngOnInit() {
   // this.categorie=this.activatedRoute.snapshot.params['id'];
    this.idPerson = this.activatedRoute.snapshot.params['id'];
    this.user.getPersonParDetail(this.idPerson).subscribe((result: any)=>{
      this.person = result;
      // console.log("id de la categorie",this.categorie);
      console.log(this.idPerson);
      this.dataUser=JSON.parse(localStorage.getItem('userData'));
      this.idUser=this.dataUser;
      console.log('idUser'+this.idUser)

      
    })
  }
  onRetour(){
    this.route.navigateByUrl('accueil')
  }
  async addDemande(person){
    this.user.setWorker(person);
    //
    if(this.dataUser != null ){
      //
      // console.log("user", this.idUser);
      // console.log("person", this.person);
      //poour declarer un objet qui prend 2 id 
      // this.demande=
      // {

      //   personnel: this.person,
      //   utilisateur: this.idUser
      // }
      // //fin de declaration
      // console.log("objet demande", this.demande);
      
      // this.user.saveUserData(this.demande).subscribe((data)=>{
      //   console.log("insert...", data);
        
      // });
      //this.route.navigate(['message-confir']);
      const popover = await this.popover.create({
        component: MessageConfirPage,
        cssClass:'taille',
        translucent: false
      });
      await popover.present();
      const{role} = await popover.onDidDismiss();
      console.log('Fermer !', role);
    }
    else{
      const popover = await this.popover.create({
        component: ConnexionPage,
        cssClass:'taille',
        translucent: false
      });
      await popover.present();
      const{role} = await popover.onDidDismiss();
      console.log('Fermer !', role);
    }
  
    
  }
  deconnexion(){
    localStorage.removeItem('userData');
    localStorage.clear();
    this.route.navigate(['accueil']);
    console.log( localStorage.getItem('userData'));
    
  }

}
