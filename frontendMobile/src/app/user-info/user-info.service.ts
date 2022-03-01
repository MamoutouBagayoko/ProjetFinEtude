import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  url='http://localhost:8080/barakelaw';
  constructor( private http : HttpClient) { }

  getPersonParDetail(id:any){
    return this.http.get(this.url+`/PersonParId/${id}`);
  }
  saveUserData(data: any){
    console.log(data);
    return this.http.post(this.url+"/AddDemande", data);
}
}
