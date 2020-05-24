import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CONNREFUSED } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  private apiURL: string = 'http://localhost:3001/user/';
  allUserList = [{"firstName":"admin","lastName":"admin","userName":"admin","dateOfBirth":"1997-07-13","email":"admin@admin.com","password":"admin","id":1}];
  
  constructor(
    private http: Http,
  ) { }

  login(params){
    this.http.get(this.apiURL).subscribe(message => {
        console.log(message);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  signUp(newUser){
    delete newUser.confirmPassword;
    this.http.post(this.apiURL, newUser).subscribe(message => {
      },
      (err) => {
        console.log(err);
      }
    );
  }

  checkEmail(email){
    var currUser = this.allUserList.find(tempUser => tempUser.email == email);
    if(currUser){
      return true;
    } else {
      return false;
    }
  }

  resetpassword(params){
    this.allUserList.find(tempUser => tempUser.email == params.email).password = params.password;
  }

}
