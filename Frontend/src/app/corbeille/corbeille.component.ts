import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { PersonnelserviceService } from '../personnel/personnelservice.service';
import { ApprenantService } from '../service/apprenant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-corbeille',
  templateUrl: './corbeille.component.html',
  styleUrls: ['./corbeille.component.scss']
})
export class CorbeilleComponent implements OnInit {
  listAdmin:any =[];
  listUsers:any =[];
  loginData : any;
  searchText: any;
  userId: any;
  fileName = "listeAdmin.xlsx";
  constructor(
       private router:Router,
       private service : ApprenantService,
       private api:PersonnelserviceService,
  ) { }
  
  ngOnInit(): void {
    this.api.AllPersonnel().subscribe((data:any)=>{
      for (let i = 0; i < data.length; i++) {
        if (data[i].etat=='inactif') {
          this.listUsers.push(data[i]);
          
        }
        console.log("======list",this.listUsers);
      }
    })
    //== restauration admin===
    this.service.allAdminSansEtat().subscribe((data:any)=>{
      for (let i = 0; i < data.length; i++) {
        if (data[i].etat=='inactif') {
          this.listAdmin.push(data[i]);
          
        }
        console.log("======listAdmin",this.listAdmin);
      }
    })
    
  }
  restoreAdmin(data: any){
    data.etat = 'actif'
    this.service.updateStudentData(data.id,data).subscribe((rejet: any)=>{
      window.location.reload();
      this.router.navigateByUrl('corbeille', {skipLocationChange: true}).then(()=>{
        this.router.navigate(['corbeille'])
      })
    
    })
  }
  restoreUser(data: any){
    data.etat = 'actif'
    this.api.updatePerson(data.id,data).subscribe((rejet: any)=>{
      window.location.reload();
      this.router.navigateByUrl('corbeille', {skipLocationChange: true}).then(()=>{
        this.router.navigate(['corbeille'])
      })
    })
  }
  
}
