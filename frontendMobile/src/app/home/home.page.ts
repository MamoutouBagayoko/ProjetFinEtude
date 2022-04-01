import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../personnel-detail/person.service';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  segmentValue = '1';
  mois: any = [];
  semaine: any = [];
  jours:any=[];
  id: any;
  personJours:any=[];
  personMois:any=[];
  personSemaine:any=[];
  listData : any
  listlibelle:any;
  search:string;
  constructor(
    private list:PersonService ,
    private activatedRoute: ActivatedRoute,
    private route:Router,
    private service:HomeService,
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    this.service.getCategoribyId(this.id).subscribe((data:any)=>{
           this.listlibelle=data
            console.log("++++++categorie++++",this.listlibelle)
    })

    //pour affficher les personnels par categori
    this.list.getPersonParCategori(this.id).subscribe((data:any)=>{
      console.log("======",data)
      for (let i = 0; i < data.length; i++) {
        if(data[i].etat=='actif'&& data[i].typeContrat=='Semaine'){
          this.personSemaine.push(data[i]);
          
        
        }
        this.semaine=this.personSemaine;
        
      }
    })
    this.list.getPersonParCategori(this.id).subscribe((data:any)=>{
      for (let i = 0; i < data.length; i++) {
        if(data[i].etat=='actif'&& data[i].typeContrat=='Mois'){
          this.personMois.push(data[i]);
        
        }
        this.mois=this.personMois;
        
      }
    })
    this.list.getPersonParCategori(this.id).subscribe((data:any)=>{
      for (let i = 0; i < data.length; i++) {
        if(data[i].etat=='actif'&& data[i].typeContrat=='Jour'){
          this.personJours.push(data[i]);
        
        }
        this.jours=this.personJours;
        
      }
    })
    

  }

  segmentChanged(event) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }


}
