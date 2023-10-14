import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { MenuBtComponent } from './components/menu-bt/menu-bt.component';
import { ContainerBtComponent } from './components/container-bt/container-bt.component';
import { ContainerConnectionComponent } from './components/container-connection/container-connection.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBtComponent,
    ContainerBtComponent,
    ContainerConnectionComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    NgFor,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
