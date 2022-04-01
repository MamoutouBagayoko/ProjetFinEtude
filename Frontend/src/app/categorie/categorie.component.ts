import { Component, OnInit } from '@angular/core';
import { ServicecategorieService } from './servicecategorie.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { CategorieModel } from './CategorieModel';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  
  formValue !:FormGroup;
  categoriData!:any;
  //shawAdd!:boolean;
  shawUpdate!:boolean;
  public photoFile:any=File;
  categoriModelObjet:CategorieModel= new CategorieModel();
   constructor(
     private formBuilder:FormBuilder,
     private api:ServicecategorieService,
     private router:Router,
    
 
 
   ) { }
   photo:File | any;
   totalLength:any;
   page:number=1;
   //shawpost:any=[];
   ngOnInit(): void {
     this.formValue = this.formBuilder.group({
       libelle:[''],
       description:[''],
       photo:['']

     })
     this.getAllCategori();
     
   }
  
   clickAddCategori(){
     this.formValue.reset();
     //this.shawAdd=true;
     this.shawUpdate=false;

     console.log("bonjour");
     
 
 
   }
   lire(files:any){
    this.photo = files;
    //this.photoFile=photo;
    
  }
   postCategoriDetail(){
     console.log(this.photo);
     
     this.api.postCategori(this.formValue.value,this.photo[0])
     .subscribe((res:any)=>{
       this.totalLength = res;
       this.categoriModelObjet=res;
       //console.log(this.categoriData);
       //
       this.categoriModelObjet.libelle=this.formValue.value.libelle;
       this.categoriModelObjet.description=this.formValue.value.description;
       this.categoriModelObjet.photo=this.photo[0].name;
       console.log("voir les données",this.categoriModelObjet)
       this.api.updateCategori(this.categoriModelObjet.id,this.categoriModelObjet).subscribe((data:any)=>{
         console.log("voir",data);
         //window.location.reload();
          this.router.navigateByUrl('categorie', {skipLocationChange: true}).then(()=>{
            this.router.navigate(['categorie'])
          })

         Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Ajout effectuer avec succès !',
          showConfirmButton: false,
          timer: 3000
        })
        
       })
      


       //alert("votre donnée a été enregistre avec succès")
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

     Swal.fire({
      title: 'Voulez-vous vraiment supprimer?',
      text: 'Vous ne pourrez pas récupérer ce fichier!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, supprime-le!',
      cancelButtonText: 'No, garde le'
    }).then((result) => {
      if (result.value) {
             this.api.deleteCategori(raw.id).subscribe(result=>{
              this.getAllCategori(); 
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
  
     
    //  this.api.deleteCategori(raw.id)
    //  .subscribe(res=>{
      //  Swal.fire({
      //     position: 'center',
      //     icon: 'success',
      //     title: 'votre donnée a été supprimé avec succès !',
      //     showConfirmButton: false,
      //     timer: 3000
      //   })
  //      this.getAllCategori();
  //    });
    }
   onEdit(raw:any){
     //this.shawAdd=false;
     this.shawUpdate=true;
     this.categoriModelObjet.id=raw.id;
     this.formValue.controls['libelle'].setValue(raw.libelle);
     this.formValue.controls['description'].setValue(raw.description);
     this.formValue.controls['photo'].setValue(raw.photo);
 
   }
   UpdateCategorie(){
     this.categoriModelObjet.description=this.formValue.value.description;
     this.categoriModelObjet.libelle=this.formValue.value.libelle;
     this.categoriModelObjet.photo=this.formValue.value.photo;
     this.api.updateCategori(this.categoriModelObjet.id,this.categoriModelObjet).subscribe(result=>{
      Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'votre donnée a été modifiée avec succès !',
            showConfirmButton: false,
            timer: 3000
          })
          this.formValue.reset();
          this.getAllCategori();
          let ref=document.getElementById('cancel')
          ref?.click();
     })
   }
   
}
