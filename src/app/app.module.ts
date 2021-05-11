import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthModule} from '@angular/fire/auth'
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { FormComponent } from './form/form.component';
import {AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FormComponent,
  ],
  exports: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    AppRoutingModule,
    AngularFireAuthModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCCYhiQCatl7iP65yiNeGJnfBdxGaW-Hhc",
      authDomain: "loginapplication-ce5a8.firebaseapp.com",
      projectId: "loginapplication-ce5a8",
      storageBucket: "loginapplication-ce5a8.appspot.com",
      messagingSenderId: "792300295054",
      appId: "1:792300295054:web:4da7bfcdfd0b5452ec0adf"
    }),
    BrowserAnimationsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
