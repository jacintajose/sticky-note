import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StickyService } from './stiky.service';
import { HttpClientModule } from '@angular/common/http';
import { NewComponent } from './new/new.component';
import { StikysComponent } from './stikys/stikys.component';
import { DetailComponent } from './detail/detail.component';
import { AuthComponent } from './auth/auth.component';
import { TestComponent } from './test/test.component';
// import { AuthModule } from './auth/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    StikysComponent,
    DetailComponent,
    AuthComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // AuthModule
  ],
  providers: [StickyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
