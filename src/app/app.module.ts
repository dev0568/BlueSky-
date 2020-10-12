import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { HiwComponent } from './hiw/hiw.component';
import { WcsComponent } from './wcs/wcs.component';
import { SignupComponent } from './signup/signup.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    ForgotComponent,
    ServiceComponent,
    AboutComponent,
    HiwComponent,
    WcsComponent,
    SignupComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
