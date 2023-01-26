import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  onKeyUp(event: any) {
    const input = event.target;
    const label = document.querySelector(`label[for=${input.id}]`);
    if (input.value.length > 0) {
      if(label){
        label.classList.add('active');
      }
    } else {
      if(label){
        label.classList.remove('active');
      }
    }
  }
}

