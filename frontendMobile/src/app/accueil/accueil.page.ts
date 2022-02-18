import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AccueilService } from './accueil.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  public personnel= environment.personnel;
  public photo= environment.photo;


  constructor(private list:AccueilService ,) { }

  listData : any=[]
  ngOnInit(): void {
    this.photo;
    
    this.list.getAllCategori().subscribe((allData)=>{
      console.log (allData);
      return this.listData=allData;
      
    });
  }
}
