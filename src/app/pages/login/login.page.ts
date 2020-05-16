import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginUser : FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginUser = this.fb.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  login(){
    console.log('login...');
    
  }

}
