import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormComponent } from './form/form.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'form', component: FormComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
