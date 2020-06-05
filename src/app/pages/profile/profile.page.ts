import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { DataServiceService } from '../../../shared/services/data-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userForm: FormGroup;
  user: any;

  constructor(private fb:FormBuilder, private dataService: DataServiceService) {
this.user = localStorage.getItem('user');
   }

  ngOnInit() {
    this.initForm();
    
  }

  initForm(){
    this.userForm = this.fb.group({      
      nombres: [this.user?.nombre || '', Validators.required],
      apellidos: [this.user?.nombre || '', Validators.required],
      email: [this.user?.nombre || '', Validators.required],
    });
  }

  salir(){
    this.dataService.logoutUser();
  }

}
