import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
   nobreDemande:any;
   demandAccepter: any = [];
   demandeRefuser:any = [];
   demandeEncours:any = [];
   nbreRefuser:any;
   nbreEncours:any;
   cpteDemande:any;
   demande:any=[];
   profituser:any;

  constructor(private api:PresenceService,
    public personService: PersonnelserviceService,
     private router: Router

    ) { }

  ngOnInit(): void {
    this.api.getAllDemande().subscribe((allData)=>{
      console.log (allData);
      return this.listData=allData;
      this.totalLength=allData;
    });
    //nombre de total des personnels
    this.api.getAllDemande().subscribe((data:any) => {
      for(let i =0; i< data.length; i++){
        if(data[i].etat == 'actif'&& data[i].statuDemande =='Valide'){
          this.demandAccepter.push(data[i]);
        }
      }
     
      this.nobreDemande = this.demandAccepter.length;
       console.log("+++++nbre++++",this.nobreDemande);
    
    })

    this.api.getAllDemande().subscribe((data:any)=>{
      for (let i = 0; i < data.length; i++) {
        if(data[i].etat=='actif'&& data[i].statuDemande=='Invalide'){
          this.demandeRefuser.push(data[i]);
        
        }
        this.nbreRefuser=this.demandeRefuser.length;
        
      }
    })
    
    this.api.getAllDemande().subscribe((data:any)=>{
      for (let i = 0; i < data.length; i++) {
        if (data[i].etat=='actif'&& data[i].statuDemande=='Encours') {
          this.demandeEncours.push(data[i]);
          
        }
        this.nbreEncours=this.demandeEncours.length;
        
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

  rejeter(data: any){
    data.statuDemande = 'Invalide'
    this.api.updateDemande(data.id, data).subscribe((rejet: any)=>{
      window.location.reload();
      this.router.navigateByUrl('presence', {skipLocationChange: true}).then(()=>{
        this.router.navigate(['presence'])
      })
    })
    
  }
  valider(data: any){
    data.statuDemande = 'Valide'
    this.api.updateDemande(data.id, data).subscribe((rejet: any)=>{
      window.location.reload();
      this.router.navigateByUrl('presence', {skipLocationChange: true}).then(()=>{
        this.router.navigate(['presence'])
      })
    })
  }
  
  
}



