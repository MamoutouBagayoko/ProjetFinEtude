import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from './person.service';
import { PopoverController } from '@ionic/angular';
import { ConnexionPage } from '../connexion/connexion.page';
@Component({
  selector: 'app-personnel-detail',
  templateUrl: './personnel-detail.page.html',
  styleUrls: ['./personnel-detail.page.scss'],
})
export class PersonnelDetailPage implements OnInit {
 id: any;
 search:string;

  constructor(
    private list:PersonService ,
    public popover: PopoverController,
    private activatedRoute: ActivatedRoute,
    private route:Router) { 
      console.log("personnel recupéré", this.activatedRoute.snapshot.params.id);
      
    }
  listData : any
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    // this.list.getAllPerson().subscribe((allData)=>{
    //   console.log (allData);
    //   return this.listData=allData;
    // });
console.log(this.id);

    //pour affficher les personnels par categori
    this.list.getPersonParCategori(this.id).subscribe((result: any)=>{
      this.listData = result;
    })

  }
  DeletePerson(person_id : any){
    this.list.deletePerson(person_id).subscribe((result)=>{ 
     console.log(result)
    this.ngOnInit()
    });
  }
  
 
  //Pour afficher le popover d'une page
  async demand(){
    const popover = await this.popover.create({
      component: ConnexionPage,
      cssClass:'taille',
      translucent: false
    });
    await popover.present();
    const{role} = await popover.onDidDismiss();
    console.log('Fermer !', role);
  }

  deconnexion(){
    localStorage.removeItem('userData');
    localStorage.clear();
    this.route.navigate(['accueil']);
    console.log( localStorage.getItem('userData'));
    
  }

}
