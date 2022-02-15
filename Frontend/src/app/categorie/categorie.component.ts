import { Component, OnInit } from '@angular/core';
import { ServicecategorieService } from './servicecategorie.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { CategorieModel } from './CategorieModel';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  formValue !:FormGroup;
  categoriData!:any;
  shawAdd!:boolean;
  shawUpdate!:boolean;
  categoriModelObjet:CategorieModel= new CategorieModel();
   constructor(
     private formBuilder:FormBuilder,
     private api:ServicecategorieService,
 
 
   ) { }
    
   totalLength:any;
   page:number=1;
   //shawpost:any=[];
   ngOnInit(): void {
     this.formValue = this.formBuilder.group({
       libelle:[''],
       description:[''],

     })
     this.getAllCategori();
     
   }
   clickAddCategori(){
     this.formValue.reset();
     this.shawAdd=true;
     this.shawUpdate=false;

     console.log("bonjour");
     
 
 
   }
   postCategoriDetail(){
     this.categoriModelObjet.libelle=this.formValue.value.libelle;
     this.categoriModelObjet.description=this.formValue.value.description;
     
     this.api.postCategori(this.categoriModelObjet)
     .subscribe(res=>{
       this.totalLength = res;
       console.log(res);
       alert("votre donnée a été enregistre avec succès")
       let ref=document.getElementById('cancel')
       ref?.click();
       this.formValue.reset();
       this.getAllCategori();
     },
     err=>{
      alert("votre donnée n'a pas enregistré");
     })
     
   }
   getAllCategori(){
     this.api.getAllCategori()
     .subscribe(res=>{
     this.categoriData = res;
       console.log(res);
     })
   }
   deleteCategori(raw:any){
     console.log(raw);
     
     this.api.deleteCategori(raw.id)
     .subscribe(res=>{
       alert("votre donnée a été supprimer avec succèsse");
       this.getAllCategori();
     });
   }
   onEdit(raw:any){
     this.shawAdd=false;
     this.shawUpdate=true;
     this.categoriModelObjet.id=raw.id;
     this.formValue.controls['libelle'].setValue(raw.libelle);
     this.formValue.controls['desciption'].setValue(raw.description);
     
     this.api.updateCategori(this.categoriModelObjet.id,this.categoriModelObjet)
     .subscribe(res=>{
       alert("Modifier avec succèsse");
       let ref=document.getElementById('cancel')
       ref?.click();
       this.formValue.reset();
       this.getAllCategori(); 
 
     })
 
   }

}
