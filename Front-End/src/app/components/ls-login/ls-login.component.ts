import { Component, OnInit } from '@angular/core';
import { ApiCallService  } from '../../service/api-call.service';
import { LocalCommunicationService } from '../../service/local-communication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ls-login',
  templateUrl: './ls-login.component.html',
  styleUrls: ['./ls-login.component.css']
})
export class LsLoginComponent implements OnInit {
  emailOrUsername: string
  password: string;
  user

  constructor(
    private _apiCallService: ApiCallService,
    private _localCommunicationService: LocalCommunicationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this._apiCallService.login({emailOrUsername: this.emailOrUsername, password:this.password}).subscribe(response => {
        if(response && response[0]){
          delete response[0].password;
          delete response[0]._id;
          localStorage.setItem('user', JSON.stringify(response[0]));
          this._localCommunicationService.setUser(response);
        } else {
          
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  forgetPassword(){
    this.router.navigateByUrl('forgetPassword');
  }

  navigateToSignupPage(){
    this.router.navigateByUrl('signup');
  }

}
