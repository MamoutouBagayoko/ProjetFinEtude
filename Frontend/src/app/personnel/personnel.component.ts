import { Component, OnInit } from '@angular/core';
import { PersonnelserviceService } from './personnelservice.service';
import { FormBuilder,FormGroup, NgForm, Validators } from '@angular/forms';
import { PersonnelModel } from './personnelModel';
import { ServicecategorieService } from '../categorie/servicecategorie.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
  mobnumPattern="[5-9][0-9]{7}";

  formValue !:FormGroup;
  personnelData!:any;
  shawAdd!:boolean;
  shawUpdate!:boolean;
  public photoFile:any=File;
  public select:any;
  personModelObjet:PersonnelModel= new PersonnelModel();
   constructor(
     private formBuilder:FormBuilder,
     private api:PersonnelserviceService,
     private selectService:ServicecategorieService,
     private router: Router,
 
 
   ) { }
   photo!:File;
   totalLength:any;
   page:number=1;
   //shawpost:any=[];
   ngOnInit(): void {
     this.formValue = this.formBuilder.group({
       nom:[''],
       prenom:[''],
       numphone:['',Validators.pattern(this.mobnumPattern)],
       adresse:[''],
       competence:[''],
       niveauetude:[''],
       age:[''],
       langparler:[''],
       categorie:[''],
       matrimoliale: [''],
       photo:[''],
       genre:[''],
       typeContrat:[''],

     })
     this.getAllPersonnel();
     this.selectcategorie();
   }
   get numphone() {
     return this.formValue.get('numphone');
} 
   lire(event:any){
    this. photo = event.target.files[0];
    //this.photoFile=photo;
  }
   clickAddPersonnel(){
     this.formValue.reset();
     this.shawAdd=true;
     this.shawUpdate=false;

     console.log("bonjour");
 
   }
   postPersonnelDetail(){
     console.log("form", this.formValue.value);
     
     this.api.postPersonnel(this.formValue.value,this.photo)
     .subscribe((res:any)=>{

      this.selectService.getCategoriById(this.formValue.value.categorie).subscribe((cat: any)=>{
        this.totalLength = res;
        this.personModelObjet=res;
        //
                console.log(this.formValue.value.nom);
        let person ={nom: this.formValue.value.nom,
                    age:this.formValue.value.age,
                    prenom:this.formValue.value.prenom,
                    numphone:this.formValue.value.numphone,
                    adresse:this.formValue.value.adresse,
                    genre:this.formValue.value.genre,
                    photo:this.formValue.value.photo,
                    competence:this.formValue.value.competence,
                    matrimoliale:this.formValue.value.matrimoliale,
                    langparler:this.formValue.value.langparler,
                    categorie: cat,
                    niveauetude:this.formValue.value.niveauetude,
                    typeContrat:this.formValue.value.typeContrat,
      };
        console.log(person);
 
        this.api.updatePerson(this.personModelObjet.id, person).subscribe((data:any) =>{
          window.location.reload();
          this.router.navigateByUrl('personnel', {skipLocationChange: true}).then(()=>{
            this.router.navigate(['personnel'])
          })
         //console.log(data);
       })
 
        //this.api.updatePerson(this.personModelObjet.id, this.personModelObjet);
       
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Ajout effectuer avec succès !',
          showConfirmButton: false,
          timer: 3000
          
        })
        this.formValue.reset();
        this.getAllPersonnel();
        
        
        // alert("votre donnée a été enregistre avec succès")
        // let ref=document.getElementById('cancel')
        // ref?.click();
        // this.formValue.reset();
        // this.getAllPersonnel();
      })
     
     },
     err=>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: "Votre champ n'est pas bien renseigné!",
        showConfirmButton: false,
        timer: 3000
        
      })
     });
     
   }
   getAllPersonnel(){
     this.api.getAllPersonnel()
     .subscribe(res=>{
     this.personnelData = res;
       console.log("liste personnel", res);
     })
   }
   //selectionnez les service par categorie
   selectcategorie(){
     this.selectService.getAllCategori().subscribe((res:any)=>{
       this.select=res;
       console.log("selectionnez",res);
     })
   }
   deletePersonnel(raw:any){
     console.log(raw);
     Swal.fire({
      title: 'Suppression',
      text: 'Voulez-vous vraiment supprimer?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprime-le!',
      cancelButtonText: 'Non, garde le'
    }).then((result) => {
      if (result.value) {
             this.api.deletePersonnel(raw.id).subscribe(result=>{
              this.getAllPersonnel(); 
             })
        Swal.fire(
          'Supprimé!',
          'Votre donnée sélectionnez a été supprimé.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulé',
          'Votre donnée sélectionnez est en sécurité :)',
          'error'
        )
      }
    })
     
    //  this.api.deletePersonnel(raw.id)
    //  .subscribe(res=>{
    //    alert("votre donnée a été supprimer avec succèsse");
    //    this.getAllPersonnel();
    //  });
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
     this.formValue.controls['typeContrat'].setValue(raw.typeContrat);
  

     
     
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
     this.personModelObjet.typeContrat=this.formValue.value.typeContrat;
     
    

     this.api.updatePerson(this.personModelObjet.id,this.personModelObjet)
     .subscribe(res=>{
       //alert("Modifier avec succèsse");
       let ref=document.getElementById('cancel')
       ref?.click();
       this.formValue.reset();
       this.getAllPersonnel(); 
 
     })
 
   }

}
