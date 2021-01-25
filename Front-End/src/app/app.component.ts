import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MenuItems } from './core/menu/menu-items/menu-items';
import { LocalCommunicationService } from './service/local-communication.service'
import { SpinnerService } from './service/spinner.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

declare var require: any;
const screenfull = require('screenfull');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  private _router: Subscription;
  @ViewChild('sidenav') sidenav;
  isFullscreen: boolean = false;
  sidebarClosed: boolean = false;
  _opened: boolean = true;
  _mode: string = "push";
  showLoader: boolean;

  constructor(public menuItems: MenuItems,
    private _spinnerService: SpinnerService,
    private _localCommunicationService: LocalCommunicationService,
    private router: Router
    ) {
  }

  ngOnInit() {
    this._spinnerService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }

  ngOnDestroy() {
    this._router.unsubscribe();
  }

  _toggleOpened(): void {
    this._opened = !this._opened;
    this.sidebarClosed = !this.sidebarClosed;
  }

  toggleFullscreen() {
    screenfull.toggle();
    this.isFullscreen = !this.isFullscreen;
  }
}