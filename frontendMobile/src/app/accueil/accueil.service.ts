import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AccueilService {
  url='http://localhost:8080/barakelaw';


  constructor(
    private http : HttpClient) { }
    getAllCategori(){
      return this.http.get(this.url+"/ListCategori");
    }
    savePersonCategori(data: any){
      console.log(data);
      return this.http.post(this.url+"/AddCategori", data);
    }
    deleteCategori ( id: any){
      return this.http.delete(`${this.url+"/DeleteCategori"}/${id}`); 
    }
    getCategoriById(id: number){
      return this.http.get(`${this.url+"/CategoriById"}/${id}`);
    }
    updateCategoriData(id: number,data : any){
      return this.http.put(`${this.url+"/updatCategori"}/${id}`,data);
    }
  

}
