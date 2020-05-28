import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  private apiURL: string = 'http://localhost:3000/user/';
  
  constructor(
    private http: Http,
  ) { }

  login(params){
    return this.http.get(this.apiURL+params.emailOrUsername+'/'+params.password)
    .map(response => response.json());
  }

  signUp(newUser){
    delete newUser.confirmPassword;
    return this.http.post(this.apiURL, newUser)
    .map(response => response.json());
  }

  checkEmail(email){
    
  }

  resetpassword(params){
   
  }

}
