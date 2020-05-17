import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  frmLogin:FormGroup;

  constructor(private router:Router) {

    this.frmLogin = new FormGroup({

    })

   }

  ngOnInit() {
  }

  ingresar(){
    this.router.navigate(['dashboard','home']);
  }

}
