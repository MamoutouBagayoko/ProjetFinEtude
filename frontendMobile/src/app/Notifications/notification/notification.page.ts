import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/user-info/user-info.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  dataUser: any;
  tab: any = [];

  constructor(private service: UserInfoService, private router: Router) { }

  ngOnInit() {
    this.dataUser =JSON.parse(localStorage.getItem('userData'));
    this.service.getAllDemande().subscribe((data: any)=>{
      for (let i = 0; i < data.length; i++) {
       if(data[i].utilisateur.id == this.dataUser.id && data[i].statuDemande != 'Encours')
       {
        this.tab.push(data[i]);
       }
      }
    })
  }

  lirenotify(id: any){
    this.service.getDemandeById(id).subscribe((data: any)=>{
      data.vue = 'lu';
      this.service.updateDemande(data.id, data).subscribe((note: any)=>{
        this.router.navigateByUrl('detail-notification/'+id)
      })
    })
    
  }

}
