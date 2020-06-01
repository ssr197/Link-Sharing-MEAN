import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ls-profile',
  templateUrl: './ls-profile.component.html',
  styleUrls: ['./ls-profile.component.css']
})
export class LsProfileComponent implements OnInit {

  isEditProfile: Boolean = false;
  isEditEmail: Boolean = false;
  isEditPassword: Boolean = false;
  user: any;
  activePage: any;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.user.dateOfBirth = this.user.dateOfBirth.split('T')[0];
    this.switchForm('Profile');
  }

  editProfile() {
    this.isEditProfile = !this.isEditProfile;
  }

  editEmail() {
    this.isEditEmail = !this.isEditEmail;
  }

  editPassword() {
  this.isEditPassword = this.isEditPassword
  }

  switchForm(activePage) {
    this.activePage = activePage;
  }
}
