import { Component, OnInit } from '@angular/core';

import { PersonnelserviceService } from '../personnel/personnelservice.service';
import { PresenceService } from './presence.service';


@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.scss']
})
export class PresenceComponent implements OnInit {
  listData:any=[];
  totalLength:any;
   page:number=1;
   nobrePerson:any;
   personactif: any = [];
   femme:any = [];
   homme:any = [];
   cpteFemme:any;
   cpteHomme:any;
   cpteDemande:any;
   demande:any=[];

  constructor(private api:PresenceService,
    public personService: PersonnelserviceService,

    ) { }

  ngOnInit(): void {
    this.api.getAllDemande().subscribe((allData)=>{
      console.log (allData);
      return this.listData=allData;
      this.totalLength=allData;
    });
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
    
    this.api.getAllDemande().subscribe((data:any)=>{
      for (let i = 0; i < data.length; i++) {
        if (data[i].etat=='actif') {
          this.demande.push(data[i]);
          
        }
        this.cpteDemande=this.demande.length;
      }
    })

  }

  infoDemandeur(id:any){
    this.api.DemandelById(id).subscribe((result)=>{
  console.log("voir",result)
    });
  }

  
  
}



