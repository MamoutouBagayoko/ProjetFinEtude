import { Component, OnInit } from '@angular/core';
import { ApprenantService } from '../service/apprenant.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.scss']
})
export class RegistreComponent implements OnInit {

  constructor(private list:ApprenantService,
    private router:Router ) { }

  addStudent = new FormGroup({ 
    nom : new FormControl(''),
    email : new FormControl(''),
    numphone : new FormControl(''),
    genre : new FormControl(''), 
    motpass : new FormControl(''),
    login : new FormControl(''),
    prenom: new FormControl(''),
    profit:new FormControl(''),
  }
  
  );
  
  message: boolean=false;

  ngOnInit(): void {
  }
  SaveData(){
    // console.log(this.addStudent.value);
    this.list.saveStudentData(this.addStudent.value).subscribe((result)=>{
      this.message=true;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Ajout effectuer avec succès !',
        showConfirmButton: false,
        timer: 3000
      })
      this.router.navigateByUrl('/main')
    
    })

}
removeMessage(){
  this.message=false;
}
}
