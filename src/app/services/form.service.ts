import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth'
import { Router } from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private db: AngularFirestore) { }

  public insertData(nume:string, prenume:string, cnp:string, adresa:string, numarTelefon:string, email:string){
    return this.db.collection(`pacienti`).add({
      nume: nume,
      prenume: prenume,
      cnp : cnp,
      adresa : adresa, 
      numarTelefon : numarTelefon,
      email : email
    });
  }

  public aaa(){
    console.log("da");
  }

}


