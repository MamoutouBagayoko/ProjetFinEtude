import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicecategorieService {

 
  url='http://localhost:8080/barakelaw';

  constructor(
    private http : HttpClient) { }
    getAllCategori(){
      return this.http.get(this.url+"/ListCategori");
    }
    postCategori(data: any){
      console.log(data);
      return this.http.post(this.url+"/AddCategori", data);
    }
    deleteCategori ( id: any){
      return this.http.delete(`${this.url+"/DeleteCategori"}/${id}`); 
    }
    // getPersonnelById(id: number){
    //   return this.http.get(`${this.url+"/AdminById"}/${id}`);
    // }
    updateCategori(id: number, data : any){
      return this.http.put(`${this.url+"/updaCategori"}/${id}`,data);
    }
}

