import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule,NgbModalModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './app-routing.module';
import { LocalCommunicationService } from './service/local-communication.service';
import { MenuToggleModule } from './core/menu/menu-toggle.module';
import { MenuItems } from './core/menu/menu-items/menu-items';
import {HttpClientModule } from '@angular/common/http';
import { PageSpinnerComponent } from './components/spinner/page-spinner/page-spinner.component';
import { LsHomeComponent } from './components/ls-home/ls-home.component';


@NgModule({
  declarations: [
    AppComponent,
    PageSpinnerComponent,
    LsHomeComponent,
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    SidebarModule.forRoot(),
    MenuToggleModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgbModalModule,
    NgbPaginationModule,
    NgbAlertModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  providers: [
     LocalCommunicationService,
     MenuItems
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
