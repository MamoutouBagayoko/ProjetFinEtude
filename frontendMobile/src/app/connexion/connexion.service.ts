import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  host: String = 'http://localhost:8080/barakelaw';

  constructor(private http: HttpClient) { }
  public verifier(login: string, motpass: string) {
    return this.http.get(this.host+"/AuthUser/"+login+"/"+motpass)
  }
  public SetLogin(login: string) {
    localStorage.setItem("login", login)
  }

  public getLogin(){
    return localStorage.getItem("login")
  }

  public SetMotpass(motpass: string) {
    localStorage.setItem("motpass", motpass)
  }

  public getMotpass(){
    return localStorage.getItem("motpass")
  }

}
