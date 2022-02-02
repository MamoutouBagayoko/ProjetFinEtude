import { Component, OnInit } from '@angular/core';
import { ApprenantService } from '../service/apprenant.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor( private list:ApprenantService) { }
  listData : any=[]
  ngOnInit(): void {
    this.list.getAllStudent().subscribe((allData)=>{
      console.log (allData);
      return this.listData=allData;
    });

  }
  DeleteStudent(student_id : any){
    this.list.deleteStudent(student_id).subscribe((result)=>{ 
     console.log(result)
    this.ngOnInit()
    });
  }
}
