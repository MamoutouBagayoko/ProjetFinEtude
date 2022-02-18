import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistreService {

  url='http://localhost:8080/barakelaw';



  constructor(
    private http : HttpClient) { }
    getAllUtiliseur(){
      return this.http.get(this.url+"/ListUtilisateur");
    }
    saveUtiliseurData(data: any, photo: File){
      console.log(data);
      const formData: FormData = new FormData();
      formData.append("image", photo)
      return this.http.post(this.url+"/AddUtilisateur", formData);
    }
    deleteUtiliseur ( id: any){
      return this.http.delete(`${this.url+"/DeleteUtilisateur"}/${id}`); 
    }
    getUtiliseurById(id: number){
      return this.http.get(`${this.url+"/PersonById"}/${id}`);
    }
    updateUtiliseurData(id: number,data : any){
      return this.http.put(`${this.url+"/updatUtilisateur"}/${id}`,data);
    }
}
