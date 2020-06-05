import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../../../shared/services/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginUser : FormGroup;
  errorMessage = ''; 
  segmentLogin = true; 
  changeValue = 'login'
  error: string;
  loading = false;

  constructor(private fb: FormBuilder,
    private dataService: DataServiceService,
    private router: Router) { }

  ngOnInit() {

    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.router.navigateByUrl('/app');
    }

    this.loginUser = this.fb.group({
      user: ['', Validators.compose([Validators.required, 
        Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]
        )],
      pass: ['', Validators.required]
    });
  }

  login(value) {
    this.error = undefined;
    this.loading = true;
    this.dataService.loginUser(value.user, value.pass).then(result =>{ 
    this.loading = false;
    localStorage.setItem('user', JSON.stringify(result));
    this.router.navigate(['app']);
    },  (error) =>{
      this.loading = false;
      this.error = 'Usuario no encontrado'
    } 
    );

  }

}
