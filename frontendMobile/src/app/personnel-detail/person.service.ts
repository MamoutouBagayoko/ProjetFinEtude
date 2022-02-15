import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url='http://localhost:8080/barakelaw';



  constructor(
    private http : HttpClient) { }
    getAllPerson(){
      return this.http.get(this.url+"/ListPerson");
    }
    savePersonData(data: any){
      console.log(data);
      return this.http.post(this.url+"/AddPerson", data);
    }
    deletePerson ( id: any){
      return this.http.delete(`${this.url+"/DeletePerson"}/${id}`); 
    }
    getPersonById(id: number){
      return this.http.get(`${this.url+"/PersonById"}/${id}`);
    }
    updatePersonData(id: number,data : any){
      return this.http.put(`${this.url+"/updatPerson"}/${id}`,data);
    }
}
