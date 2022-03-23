import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApprenantService } from '../service/apprenant.service';
import { ModelMain } from './Model-main';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor( private list:ApprenantService,
    private formBuilder:FormBuilder,) { }
  listData : any=[]
  shawAdd!:boolean;
  shawUpdate!:boolean;
  formValue !:FormGroup;
  adminData!:any;
  totalLength:any;
  page:number=1;
  adminModelojet: ModelMain= new ModelMain();
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      nom:[''],
      prenom:[''],
      numphone:[''],
      login:[''],
      motpass:[''],
      profit:[''],
      email:[''],
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
    this.adminModelojet.motpass=this.formValue.value.motpass;
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
    this.formValue.controls['motpass'].setValue(raw.motpass);
    this.formValue.controls['genre'].setValue(raw.genre);
    this.formValue.controls['profit'].setValue(raw.profit);
    //this.formValue.controls['adresse'].setValue(raw.adresse);

  }
  updateAdmin(){
    this.adminModelojet.nom=this.formValue.value.nom;
    this.adminModelojet.email=this.formValue.value.email;
    this.adminModelojet.prenom=this.formValue.value.prenom;
    this.adminModelojet.login=this.formValue.value.login;
    this.adminModelojet.motpass=this.formValue.value.motpass;
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
      this.formValue.reset();
      this.getAllAdmin();
    })
  }


  deleteAdmin(student_id : any){
    this.list.deleteStudent(student_id).subscribe((result)=>{ 
     console.log(result)
    this.ngOnInit()
    });
  }

}
