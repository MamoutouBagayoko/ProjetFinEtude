import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/user-info/user-info.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss'],
})
export class NotifyComponent implements OnInit {
dataUser: any;
tab: any = [];
nbreTab: any;
  constructor(private service: UserInfoService) { }

  ngOnInit() {
    this.dataUser =JSON.parse(localStorage.getItem('userData'));
    this.service.getAllDemande().subscribe((data: any)=>{
      for (let i = 0; i < data.length; i++) {
       if(data[i].vue == 'non_lu' && data[i].utilisateur.id == this.dataUser.id && data[i].statuDemande != 'Encours')
       {
        this.tab.push(data[i]);
       }
      }
      this.nbreTab = this.tab.length;
    })
  }

}
