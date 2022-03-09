import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {

  url='http://localhost:8080/barakelaw';

  constructor(
    private http : HttpClient) { }
    getAllDemande(){
      return this.http.get(this.url+"/ListDemande");
    }
    AddDemande(data: any){
     
      return this.http.post(this.url+"/AddDemande", data);
    }
    deleteDemande( id: any){
      return this.http.delete(`${this.url+"/DeleteDemande"}/${id}`); 
    }
    DemandelById(id: number){
      return this.http.get(`${this.url+"/PersonDemande"}/${id}`);
    }
    updateDemande(id: number, data : any){
      return this.http.put(`${this.url+"/updatDemande"}/${id}`,data);
    }
    ListDemandeurlById(id: number){
      return this.http.get(`${this.url+"/Demandeur"}/${id}`);
    }

}
