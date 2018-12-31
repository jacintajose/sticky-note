import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StickyService } from './stiky.service';
import { HttpClientModule } from '@angular/common/http';
import { NewComponent } from './new/new.component';
import { StikysComponent } from './stikys/stikys.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    StikysComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StickyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
