import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApprenantService } from '../service/apprenant.service';
import { ModelMain } from './Model-main';
import Swal from 'sweetalert2';
import { PresenceService } from '../presence/presence.service';
import { Router } from '@angular/router';
import { PersonnelserviceService } from '../personnel/personnelservice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
demande: any = [];
nbreDemande: any;
totalLength:any;
admin:any;
adminConnecty:any;
// ===nombre personnels===
listData:any=[];
 
   page:number=1;
   nobrePerson:any;
   personactif: any = [];
   femme:any = [];
   homme:any = [];
   cpteFemme:any;
   cpteHomme:any;
   cpteDemande:any;
   cpteNbre:any;
   profituser:any;

  constructor( private list:ApprenantService, private service: PresenceService, private router: Router,
    public personService: PersonnelserviceService) { }  
  ngOnInit(): void {

    this.admin=localStorage.getItem('userData');
    this.adminConnecty=JSON.parse(this.admin);
    // ===== programme pour compter le nombre======
     //nombre de total des personnels
    this.personService.getAllPersonnel().subscribe((data:any) => {
      for(let i =0; i< data.length; i++){
        if(data[i].etat == 'actif'){
          this.personactif.push(data[i]);
        }
      }
      this.nobrePerson = this.personactif.length;
    
    })

    this.personService.getAllPersonnel().subscribe((data:any)=>{
      for (let i = 0; i < data.length; i++) {
        if(data[i].etat=='actif'&& data[i].genre=='Femme'){
          this.femme.push(data[i]);
        
        }
        this.cpteFemme=this.femme.length;
        
      }
    })
    
    this.personService.getAllPersonnel().subscribe((data:any)=>{
      for (let i = 0; i < data.length; i++) {
        if (data[i].etat=='actif'&& data[i].genre=='Homme') {
          this.homme.push(data[i]);
          
        }
        this.cpteHomme=this.homme.length;
        
      }
    })
    
    this.service.getAllDemande().subscribe((data:any)=>{
      for (let i = 0; i < data.length; i++) {
        if (data[i].etat=='actif') {
          this.cpteNbre.push(data[i]);
          
        }
        this.cpteDemande=this.cpteNbre.length;
      }
    })
    
    

    //=======Fin programme======

    this.service.getAllDemande().subscribe((data: any)=>{
      for(let i = 0; i < data.length; i++){
        if(data[i].statuDemande == 'Encours'){
          this.demande.push(data[i]);
        }
      }
      this.nbreDemande = this.demande.length;
    })
  }
 
  rejeter(data: any){
    data.statuDemande = 'Invalide'
    this.service.updateDemande(data.id, data).subscribe((rejet: any)=>{
      window.location.reload();
      this.router.navigateByUrl('main', {skipLocationChange: true}).then(()=>{
        this.router.navigate(['main'])
      })
    })
    
  }
  valider(data: any){
    data.statuDemande = 'Valide'
    this.service.updateDemande(data.id, data).subscribe((rejet: any)=>{
      window.location.reload();
      this.router.navigateByUrl('main', {skipLocationChange: true}).then(()=>{
        this.router.navigate(['main'])
      })
    })
  }



}
