import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PresenceService } from '../presence/presence.service';
import { ApprenantService } from '../service/apprenant.service';

import Swal from 'sweetalert2';
import { ModelAdmin } from './ModelAdmin';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
demande: any = [];
nbreDemande: any;
mobnumPattern="[5-9][0-9]{7}";

  constructor( private list:ApprenantService, private service: PresenceService,
    private formBuilder:FormBuilder,) { }
  listData : any=[]
  shawAdd!:boolean;
  shawUpdate!:boolean;
  formValue !:FormGroup;
  adminData!:any;
  totalLength:any;
  page:number=1;
  adminModelojet: ModelAdmin= new ModelAdmin();
  ngOnInit(): void {
    this.service.getAllDemande().subscribe((data: any)=>{
      for(let i = 0; i < data.length; i++){
        if(data[i].statuDemande == 'Encours'){
          this.demande.push(data[i]);
        }
      }
      this.nbreDemande = this.demande.length;
    })
    this.formValue = this.formBuilder.group({
      nom:[''],
      prenom:[''],
      numphone:['',Validators.pattern(this.mobnumPattern)],
      login:[''],
      motpass:[''],
      profit:[''],
      email:['', Validators.pattern(this.emailPattern)],
      genre:[''],
      // adresse:[''],
    

    })
    this.getAllAdmin();

  }
  getAllAdmin(){
  this.list.getAllStudent().subscribe((allData)=>{
    console.log (allData);
    return this.listData=allData;
  });

}
get email() {
  return this.formValue.get('email');
}  
get numphone() {
  return this.formValue.get('numphone');
}         
  clickAddAdmin(){
    this.formValue.reset();
    this.shawAdd=true;
    this.shawUpdate=false;
  }
  postAdminDetail(){
    this.adminModelojet.prenom=this.formValue.value.prenom;
    this.adminModelojet.nom=this.formValue.value.nom;
    this.adminModelojet.email=this.formValue.value.email;
    this.adminModelojet.numphone=this.formValue.value.numphone;
    this.adminModelojet.profit=this.formValue.value.profit;
    this.adminModelojet.login=this.formValue.value.login;
    this.adminModelojet.motpasse=this.formValue.value.motpass;
    this.adminModelojet.genre=this.formValue.value.genre;
    //this.adminModelojet.adresse=this.formValue.value.adresse;
    this.list.saveStudentData(this.adminModelojet).subscribe(ressult=>{
      //this.totalLength=ressult.length;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'votre donnée a été enregistré avec succès !',
        showConfirmButton: false,
        timer: 3000
      })
      this.formValue.reset();
      this.getAllAdmin();

    })
  }
  onEdit(raw:any){
    this.shawAdd=false;
    this.shawUpdate=true;
    this.adminModelojet.id=raw.id;
    this.formValue.controls['prenom'].setValue(raw.prenom);
    this.formValue.controls['nom'].setValue(raw.nom);
    this.formValue.controls['email'].setValue(raw.email);
    this.formValue.controls['numphone'].setValue(raw.numphone);
    this.formValue.controls['login'].setValue(raw.login);
    this.formValue.controls['motpass'].setValue(raw.motpasse);
    this.formValue.controls['genre'].setValue(raw.genre);
    this.formValue.controls['profit'].setValue(raw.profit);
    //this.formValue.controls['adresse'].setValue(raw.adresse);

  }
  updateAdmin(){
    this.adminModelojet.nom=this.formValue.value.nom;
    this.adminModelojet.email=this.formValue.value.email;
    this.adminModelojet.prenom=this.formValue.value.prenom;
    this.adminModelojet.login=this.formValue.value.login;
    this.adminModelojet.motpasse=this.formValue.value.motpass;
    this.adminModelojet.profit=this.formValue.value.profit;
    this.adminModelojet.genre=this.formValue.value.genre;
    this.adminModelojet.numphone=this.formValue.value.numphone;
    //this.adminModelojet.adresse=this.formValue.value.adresse;
    this.list.updateStudentData(this.adminModelojet.id,this.adminModelojet).subscribe(result=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'votre donnée a été modifié avec succès !',
        showConfirmButton: false,
        timer: 3000
      })
      let ref=document.getElementById('cancel')
       ref?.click();
      this.formValue.reset();
      this.getAllAdmin();
    })
  }

  deleteAdmin(raw:any){
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
            this.list.deleteStudent(raw.id).subscribe(result=>{
             this.getAllAdmin(); 
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
 

  }
}