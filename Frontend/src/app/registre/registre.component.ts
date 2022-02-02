import { Component, OnInit } from '@angular/core';
import { ApprenantService } from '../service/apprenant.service';

import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.scss']
})
export class RegistreComponent implements OnInit {

  constructor(private list:ApprenantService ) { }

  addStudent = new FormGroup({ 
    nom : new FormControl(''),
    email : new FormControl(''),
    telephone : new FormControl(''),
    genre : new FormControl(''), 
    password : new FormControl(''),
    login : new FormControl(''),
    prenom: new FormControl(''),
  }

  );
  message: boolean=false;

  ngOnInit(): void {
  }
  SaveData(){
    // console.log(this.addStudent.value);
    this.list.saveStudentData(this.addStudent.value).subscribe((result)=>{
      this.message=true;
    
    })

}
removeMessage(){
  this.message=false;
}
}
