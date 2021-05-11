import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email : string;
  password : string;
  value = 'Clear me';
  value1 = 'Clear me1';

  constructor(private AuthService : FirebaseService) 
  {}


  ngOnInit() {
  }

 

  login (email,password){
    
    this.AuthService.signin(email,password);
    
    
  }


}
