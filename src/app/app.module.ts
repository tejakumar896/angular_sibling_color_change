import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './shared.service';
import { MainComponent } from './main/main.component';
import { DataShareComponent } from './data-share/data-share.component';

import {IvyCarouselModule} from 'angular-responsive-carousel';

// import { SlickModule } from 'ngx-slick';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DataShareComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    // SlickModule.forRoot()
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
