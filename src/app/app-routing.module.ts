import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ForgotComponent } from './forgot/forgot.component';
import { FormComponent } from './form/form.component';
import { HiwComponent } from './hiw/hiw.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { SignupComponent } from './signup/signup.component';
import { WcsComponent } from './wcs/wcs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'forgot', component: ForgotComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'about', component: AboutComponent},
  { path: 'hiw', component: HiwComponent},
  { path: 'wcs', component: WcsComponent},
  { path: 'signup', component: SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
