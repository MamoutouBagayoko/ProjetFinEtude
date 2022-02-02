import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApprenantService } from '../service/apprenant.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private student:ApprenantService, private route : ActivatedRoute) { }
  UpdateStudent = new FormGroup({ 
    nom : new FormControl(''),
    email : new FormControl(''),
    telephone : new FormControl(''),
    password : new FormControl(''),
    login : new FormControl(''),
    genre : new FormControl(''),
    prenom : new FormControl(''),
  }

  );
  message: boolean=false;

  ngOnInit(): void {
    this.student.getStudentById(this.route.snapshot.params.id).subscribe((result: any)=>{
      this.UpdateStudent = new FormGroup({ 
        nom : new FormControl(result['nom']),
        email : new FormControl(result['email']),
        telephone : new FormControl(result['telephone']),
        genre : new FormControl(result['genre']), 
        password : new FormControl(result['password']),
        login : new FormControl(result['login']),
        prenom: new FormControl(result['prenom']),
        
      }

      );

    })
  }
  UpdateData(){
    // console.log(this.UpdateStudent.value);
    this.student.updateStudentData(this.route.snapshot.params.id,this.UpdateStudent.value).subscribe((result: any)=>{
      //console.log(result);
      this.message=true;
    })

  }
  removeMessage(){
    this.message=false;
  }
}
