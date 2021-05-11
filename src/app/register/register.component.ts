import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email : string;
  password : string;

  constructor(private AuthService : FirebaseService) { }

  ngOnInit() {
  }

  register (email, password){
    this.AuthService.signup(email,password);
    this.AuthService.logout();
  }

}
