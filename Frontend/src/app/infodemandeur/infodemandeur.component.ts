import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PresenceService } from '../presence/presence.service';


@Component({
  selector: 'app-infodemandeur',
  templateUrl: './infodemandeur.component.html',
  styleUrls: ['./infodemandeur.component.scss']
})
export class InfodemandeurComponent implements OnInit {

  id:any
  service: any;

  constructor(
    public api:PresenceService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("id", this.id);
    
    this.api.ListDemandeurlById(this.id).subscribe((data:any) =>{
      console.log(data);
      
    this.service = data;
    })
  }


}
