import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url='http://localhost:8080/barakelaw';


  constructor(
    private http : HttpClient) { }
    getCategoribyId(id:any){
      return this.http.get(`${this.url+"/categoriAndId"}/${id}`);
    }
}
