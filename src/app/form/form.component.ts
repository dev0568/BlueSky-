import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
form:any; 


  constructor() {
    this.form = {
      uname :'',
      fname :'',
      sname :'',
      psswd :'',
      

    };
   }

  ngOnInit(): void {
  }
  sucess(){
    console.log(this.form)
  }

}
