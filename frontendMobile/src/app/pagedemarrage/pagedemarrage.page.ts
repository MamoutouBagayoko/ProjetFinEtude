import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagedemarrage',
  templateUrl: './pagedemarrage.page.html',
  styleUrls: ['./pagedemarrage.page.scss'],
})
export class PagedemarragePage implements OnInit {

  constructor(
    private router :Router,
  ) {
    setTimeout(()=>{
      this.router.navigateByUrl('accueil');
    },3000);
   }

  ngOnInit() {
  }

}
