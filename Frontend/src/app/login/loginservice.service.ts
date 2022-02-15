import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  host: String = 'http://localhost:8080/barakelaw';

  constructor(private http: HttpClient) { }
  public verifier(login: string, motpasse: string) {
    return this.http.get(this.host+"/authAdmin/"+login+"/"+motpasse)
  }
  public SetLogin(login: string) {
    localStorage.setItem("login", login)
  }

  public getLogin(){
    return localStorage.getItem("login")
  }

  public SetMotpasse(motpasse: string) {
    localStorage.setItem("motpasse", motpasse)
  }

  public getMotpasse(){
    return localStorage.getItem("motpasse")
  }


}
