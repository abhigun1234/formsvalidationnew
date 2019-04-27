import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styles: ['input.ng-invalid { border-left:5px solid red } input.ng-valid{border-left:5px solid green}' ]
})
export class UserregistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(val :any)
  {

  console.log(val)
  }

}
