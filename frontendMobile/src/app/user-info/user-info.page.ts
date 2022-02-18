import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { UserInfoService } from './user-info.service';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {
  idPerson: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private  user: UserInfoService,
    private route:Router,
  ) { }
  person:any;
  idUser:any;
  dataUser:any;


  ngOnInit() {
    this.idPerson = this.activatedRoute.snapshot.params['id'];
    this.user.getPersonParDetail(this.idPerson).subscribe((result: any)=>{
      this.person = result;
      console.log(this.idPerson);
      this.dataUser=JSON.parse(localStorage.getItem('userData'));
      this.idUser=this.dataUser.id;
      console.log('idUser'+this.idUser)

      
    })
  }
  onRetour(){
    this.route.navigateByUrl('user-info')
  }
  addDemande(){
    // this.user.add(this.idUser,this.idPerson).subscribe((data)=>{

    // })
  //   this.user.add(this.idUser,this.idPerson).subscribe(
  //     {
  //       next: result =>{

  //       },
  //       error: error=>{

  //       }
  //     }
  //   )
   
  // }

}
