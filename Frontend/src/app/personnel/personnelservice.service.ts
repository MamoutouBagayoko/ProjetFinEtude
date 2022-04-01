import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

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
    postPersonnel(data: any, img:File): Observable<any>{
      const forms:FormData=new FormData();
      forms.append("image",img)
      console.log("verification img"+img);
      return this.http.post(this.url+"/AddPerson", forms);
    }
    deletePersonnel ( id: any){
      return this.http.delete(`${this.url+"/DeletePerson"}/${id}`); 
    }
    getPersonnelById(id: number){
      return this.http.get(`${this.url+"/PersonParId"}/${id}`);
    }
    updatePerson(id: number, data : any){
      return this.http.put(`${this.url+"/updatPerson"}/${id}`,data);
    }
    AllPersonnel(){
      return this.http.get(this.url+"/AllPerson");
    }
}
