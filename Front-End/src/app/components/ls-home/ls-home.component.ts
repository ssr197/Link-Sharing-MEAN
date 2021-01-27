import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-ls-home',
  templateUrl: './ls-home.component.html',
  styleUrls: ['./ls-home.component.css']
})
export class LsHomeComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }
}
