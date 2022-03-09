import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    postCategori(data: any,img:File): Observable<any>{
      const forms:FormData=new FormData();
      forms.append("image",img)
      console.log(data);
      return this.http.post(this.url+"/AddCategori", forms);
    }
    deleteCategori ( id: any){
      return this.http.delete(`${this.url+"/DeleteCategori"}/${id}`); 
    }
    getCategoriById(id: number){
      return this.http.get(`${this.url+"/categoriAndId"}/${id}`);
    }
    updateCategori(id: number, data : any){
      return this.http.put(`${this.url+"/updatCategori"}/${id}`,data);
    }
}

