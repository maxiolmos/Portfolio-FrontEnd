import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-y-redes',
  templateUrl: './login-y-redes.component.html',
  styleUrls: ['./login-y-redes.component.css']
})

export class LoginYRedesComponent {

  constructor(private router:Router) {

  }

  ngOnInit(): void {

  }

  login(){
    this.router.navigate(['/login']);
  }

}
