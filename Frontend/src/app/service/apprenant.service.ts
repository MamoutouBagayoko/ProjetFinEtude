import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApprenantService {

  url='http://localhost:8080/barakelaw';



  constructor(
    private http : HttpClient) { }
    getAllStudent(){
      return this.http.get(this.url+"/ListAdmin");
    }
    saveStudentData(data: any){
      console.log(data);
      return this.http.post(this.url+"/AddAdmin", data);
    }
    deleteStudent ( id: any){
      return this.http.delete(`${this.url+"/DeleteAdmin"}/${id}`); 
    }
    getStudentById(id: number){
      return this.http.get(`${this.url+"/AdminById"}/${id}`);
    }
    updateStudentData(id: number,data : any){
      return this.http.put(`${this.url+"/updatAdmin"}/${id}`,data);
    }
}
