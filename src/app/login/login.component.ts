import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
fullname
password
gender = ['Male', 'Female'];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onLogin(){
      this.router.navigate(['/details'], { queryParams: { fullname: this.fullname, password: this.password } });

  }

}
