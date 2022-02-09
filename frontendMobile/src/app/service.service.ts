import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public personnel: any;

  constructor() { }
  getpersonnel(){
    return this.listepersonnel;
  }
}
