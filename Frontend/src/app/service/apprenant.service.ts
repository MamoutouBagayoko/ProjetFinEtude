import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApprenantService {

  url='http://localhost:8080/DashboardApprenants';



  constructor(
    private http : HttpClient) { }
    getAllStudent(){
      return this.http.get(this.url+"/ListeApprenants");
    }
    saveStudentData(data: any){
      console.log(data);
      return this.http.post(this.url+"/apprenant", data);
    }
    deleteStudent ( id: any){
      return this.http.delete(`${this.url+"/apprenant"}/${id}`); 
    }
    getStudentById(id: number){
      return this.http.get(`${this.url+"/apprenant"}/${id}`);
    }
    updateStudentData(id: number,data : any){
      return this.http.put(`${this.url+"/apprenant"}/${id}`,data);
    }
}
