import { Component, OnInit } from '@angular/core';
import { PresenceService } from '../presence/presence.service';

@Component({
  selector: 'app-profit-user',
  templateUrl: './profit-user.component.html',
  styleUrls: ['./profit-user.component.scss']
})
export class ProfitUserComponent implements OnInit {

  constructor(private api:PresenceService) { }

  ngOnInit(): void {
      this.api.getAllDemande();
  }

}
