import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { enviroment } from "src/enviroment";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor (private httpclient: HttpClient) {
  }

  private readonly baseUrl = enviroment["endpoint"];

  login(Email:string, Password:string){
    return this.httpclient.post<any>(`${this.baseUrl}/createToken`, { Email: Email, Password: Password});
  }
}