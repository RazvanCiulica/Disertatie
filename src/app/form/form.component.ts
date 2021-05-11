import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nume : string;
  prenume : string;
  cnp : string;
  adresa : string;
  numarTelefon :string;
  email :string;


  constructor(private service:FormService) { }

  ngOnInit() {
  }

  save(){
    console.log(this.nume);
    console.log(this.prenume);
    console.log(this.cnp);
    console.log(this.adresa);
    console.log(this.numarTelefon);
    console.log(this.email);
     this.service.insertData(this.nume,this.prenume,this.cnp, this.adresa, this.numarTelefon,this.email); 
  }

}
