import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {RegisterService} from '..//register.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: ['input.ng-invalid { border-left:5px solid red } input.ng-valid{border-left:5px solid green}' ]
})
export class RegisterComponent implements OnInit {
  public userInfo=[]
  constructor(private http :HttpClient,private registerService:RegisterService) { }

  ngOnInit() {
  }
  onSubmit(val :any)
  {
    console.log(val['name'])
    this.registerService.postUserData(val).subscribe(res=>{
      console.log(res)
    })
    
  }

}
