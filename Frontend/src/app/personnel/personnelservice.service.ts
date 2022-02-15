import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PersonnelserviceService {

  url='http://localhost:8080/barakelaw';

  constructor(
    private http : HttpClient) { }
    getAllPersonnel(){
      return this.http.get(this.url+"/ListPerson");
    }
    postPersonnel(data: any){
      console.log(data);
      return this.http.post(this.url+"/AddPerson", data);
    }
    deletePersonnel ( id: any){
      return this.http.delete(`${this.url+"/DeletePerson"}/${id}`); 
    }
    getPersonnelById(id: number){
      return this.http.get(`${this.url+"/AdminById"}/${id}`);
    }
    updatePerson(id: number, data : any){
      return this.http.put(`${this.url+"/updatPerson"}/${id}`,data);
    }
}
