import { Component, OnInit } from '@angular/core';
import { PersonnelserviceService } from './personnelservice.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { PersonnelModel } from './personnelModel';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {

  formValue !:FormGroup;
  personnelData!:any;
  shawAdd!:boolean;
  shawUpdate!:boolean;
  personModelObjet:PersonnelModel= new PersonnelModel();
   constructor(
     private formBuilder:FormBuilder,
     private api:PersonnelserviceService,
 
 
   ) { }
    
   totalLength:any;
   page:number=1;
   //shawpost:any=[];
   ngOnInit(): void {
     this.formValue = this.formBuilder.group({
       nom:[''],
       prenom:[''],
       numphone:[''],
       adresse:[''],
       competence:[''],
       niveauetude:[''],
       age:[''],
       langparler:[''],
       matrimoliale: [''],
       photo:[''],
       genre:[''],

     })
     this.getAllPersonnel();
     
   }
   clickAddPersonnel(){
     this.formValue.reset();
     this.shawAdd=true;
     this.shawUpdate=false;

     console.log("bonjour");
     
 
 
   }
   postPersonnelDetail(){
     this.personModelObjet.nom=this.formValue.value.nom;
     this.personModelObjet.age=this.formValue.value.age;
     this.personModelObjet.prenom=this.formValue.value.prenom;
     this.personModelObjet.numphone=this.formValue.value.numphone;
     this.personModelObjet.competence=this.formValue.value.competence;
     this.personModelObjet.genre=this.formValue.value.genre;
     this.personModelObjet.langparler=this.formValue.value.langparler;
     this.personModelObjet.niveauetude=this.formValue.value.niveauetude;
     this.personModelObjet.matrimoliale=this.formValue.value.matrimoliale;
     this.personModelObjet.photo=this.formValue.value.photo;
     this.personModelObjet.adresse=this.formValue.value.adresse;
     this.api.postPersonnel(this.personModelObjet)
     .subscribe(res=>{
       this.totalLength = res;
       console.log(res);
       alert("votre donnée a été enregistre avec succès")
       let ref=document.getElementById('cancel')
       ref?.click();
       this.formValue.reset();
       this.getAllPersonnel();
     },
     err=>{
      alert("votre donnée n'a pas enregistré");
     })
     
   }
   getAllPersonnel(){
     this.api.getAllPersonnel()
     .subscribe(res=>{
     this.personnelData = res;
       console.log(res);
     })
   }
   deletePersonnel(raw:any){
     console.log(raw);
     
     this.api.deletePersonnel(raw.id)
     .subscribe(res=>{
       alert("votre donnée a été supprimer avec succèsse");
       this.getAllPersonnel();
     });
   }
   onEdit(raw:any){
     this.shawAdd=false;
     this.shawUpdate=true;
     this.personModelObjet.id=raw.id;
     this.formValue.controls['prenom'].setValue(raw.prenom);
     this.formValue.controls['nom'].setValue(raw.nom);
     this.formValue.controls['age'].setValue(raw.age);
     this.formValue.controls['numphone'].setValue(raw.numphone);
     this.formValue.controls['adresse'].setValue(raw.adresse);
     this.formValue.controls['niveauetude'].setValue(raw.niveauetude);
     this.formValue.controls['competence'].setValue(raw.competence);
     this.formValue.controls['photo'].setValue(raw.photo);
     this.formValue.controls['langparler'].setValue(raw.langparler);
     this.formValue.controls['matrimoliale'].setValue(raw.matrimoliale);
     this.formValue.controls['genre'].setValue(raw.genre);
     
   }
   UpdatePersonnel(){
     this.personModelObjet.nom=this.formValue.value.nom;
     this.personModelObjet.age=this.formValue.value.age;
     this.personModelObjet.prenom=this.formValue.value.prenom;
     this.personModelObjet.numphone=this.formValue.value.numphone;
     this.personModelObjet.adresse=this.formValue.value.adresse;
     this.personModelObjet.genre=this.formValue.value.genre;
     this.personModelObjet.photo=this.formValue.value.photo;
     this.personModelObjet.competence=this.formValue.value.competence;
     this.personModelObjet.matrimoliale=this.formValue.value.matrimoliale;
     this.personModelObjet.langparler=this.formValue.value.langparler;
     this.personModelObjet.niveauetude=this.formValue.value.niveauetude;
     
     this.api.updatePerson(this.personModelObjet.id,this.personModelObjet)
     .subscribe(res=>{
       alert("Modifier avec succèsse");
       let ref=document.getElementById('cancel')
       ref?.click();
       this.formValue.reset();
       this.getAllPersonnel(); 
 
     })
 
   }

}
