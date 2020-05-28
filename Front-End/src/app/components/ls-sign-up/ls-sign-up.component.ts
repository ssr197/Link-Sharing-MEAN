import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from '../../service/api-call.service';
import { LocalCommunicationService } from '../../service/local-communication.service'


@Component({
  selector: 'app-ls-sign-up',
  templateUrl: './ls-sign-up.component.html',
  styleUrls: ['./ls-sign-up.component.css']
})
export class LsSignUpComponent implements OnInit {

  @Input() profilePage:boolean = false;
  isEditProfile = false;
  passwordIsFilled:boolean = false;
  passwordMatch:boolean = false;
  user = {
    firstName: '',
    lastName: '',
    userName: '',
    dateOfBirth: '',
    email: '',
    password:'',
    confirmPassword:''
  }

  constructor(
    private router: Router,
    private _apiCallService: ApiCallService,
    private _localCommunicationService: LocalCommunicationService
  ) { }

  ngOnInit() {
  }

  navigateToLoginPage(){
    this.router.navigateByUrl('login');
  }

  onSubmit(){
    this._apiCallService.signUp(this.user).subscribe(response => {
      delete response._id;
      delete response.password;
      localStorage.setItem('user', JSON.stringify(response[0]));
      this._localCommunicationService.setUser(response);
    })
  }

}
