import { Component, OnInit } from '@angular/core';
import { PresenceService } from './presence.service';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.scss']
})
export class PresenceComponent implements OnInit {
  listData:any=[];
  constructor(private api:PresenceService) { }

  ngOnInit(): void {
    this.api.getAllDemande().subscribe((allData)=>{
      console.log (allData);
      return this.listData=allData;
    });
  }
  infoDemandeur(id:any){
    this.api.DemandelById(id).subscribe((result)=>{
  console.log("voir",result)
    });
  }

}
