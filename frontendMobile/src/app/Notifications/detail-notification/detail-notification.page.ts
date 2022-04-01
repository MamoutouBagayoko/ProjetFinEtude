import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfoService } from 'src/app/user-info/user-info.service';

@Component({
  selector: 'app-detail-notification',
  templateUrl: './detail-notification.page.html',
  styleUrls: ['./detail-notification.page.scss'],
})
export class DetailNotificationPage implements OnInit {
id: any;
notify: any;
  constructor(private service: UserInfoService, private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    this.service.getDemandeById(this.id).subscribe((data: any)=>{
      this.notify = data;
      console.log(this.notify);
      
    })
    
  }

}
