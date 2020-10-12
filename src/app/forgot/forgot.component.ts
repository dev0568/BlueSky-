import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
form:any;

  constructor() {
    this.form = {
      email:'',
      contact:''


    }
   }

  ngOnInit(): void {
  }

  sucess(){
    console.log(this.form)
  }

}
