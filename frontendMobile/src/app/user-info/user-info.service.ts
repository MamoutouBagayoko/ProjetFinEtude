import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  url='http://localhost:8080/barakelaw';
  worker: any;
  constructor( private http : HttpClient) { }

  setWorker(data: any){this.worker = data};
  getWorker(){return this.worker};

  getPersonParDetail(id:any){
    return this.http.get(this.url+`/PersonParId/${id}`);
  }

  saveUserData(data: any){
    console.log(data);
    return this.http.post(this.url+"/AddDemande", data);
  }

  getAllDemande(){
    return this.http.get(this.url+"/ListDemande")
  }

  getDemandeById(id: number){
    return this.http.get(this.url+`/Demandeur/${id}`);
  }

  updateDemande(id: number, data : any){
    return this.http.put(`${this.url+"/updatDemande"}/${id}`,data);
  }
}
