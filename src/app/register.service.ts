import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  headers: HttpHeaders;
  constructor(private httpclient :HttpClient) { 

    this.headers = new HttpHeaders();
    this.headers  = this.headers .set('Content-Type', 'application/json; charset=utf-8');
  
  }
  public postUserData(data:any)
  {  console.log(data)
    const body = data;
    let options = {
      headers: this.headers
     }; 
   const url='http://127.0.0.1:5000/register/'
   return this.httpclient.post(url,body,options)
   
  }
}


