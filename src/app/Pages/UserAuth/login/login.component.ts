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
    if (input.value.length > 0) {
      input.classList.add('active');
    } else {
      input.classList.remove('active');
    }
  }
}

