import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from '../../../shared/services/data-service.service';
import { Car } from './car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {
  carForm: FormGroup;
  msg: string;
  car: any = {};
  loading = false;



  constructor(private router: Router,
    private fb: FormBuilder,
    private dataService: DataServiceService,
    private toast: ToastController,
  ) {
    this.car = this.router.getCurrentNavigation().extras.state;
    

   }


  ngOnInit() {
    this.initForm();
  }


  initForm(){
    this.carForm = this.fb.group({      
      nombre: [this.car?.nombre || '', Validators.required],
      tipo: [this.car?.tipo || 'camion', Validators.required],
      unidadDistancia: [this.car?.unidadDistancia || 'kilometros', Validators.required],
      unidadCombustible: [this.car?.unidadCombustible || 'litros', Validators.required],
      tipoCombustible: [this.car?.tipoCombustible || 'diesel', Validators.required],
      marca: this.car?.marca || null,
      modelo: this.car?.modelo || null,
      año: this.car?.año || null,
      matricula: this.car?.matricula || null

    })
  }


  guardar() {
    this.loading = true;
    console.log(this.carForm.value);
    if(this.car){
      this.dataService.updateDoc('vehiculos/',this.car.id, this.carForm.value).then(
        ()=>{
          this.loading = false;
          this.dataService.presentToast('Se ha guardado correctamente!')
          this.router.navigate(['car']);

        } 
        )

    }else{
      this.dataService.createCollection('vehiculos', this.carForm.value).then(data => {
        this.loading = false;
        this.dataService.presentToast('Se ha guardado correctamente!')
        this.router.navigate(['car']);

  
      }, error => console.log(error));

    }
   
  }

  eliminar(){
    
  }

  





}




  // async presentAlertAcept() {
  //   const alert = await this.alertController.create({
  //     header: 'Tiempo a recoger',
  //     subHeader: 'En minutos',
  //     inputs: [
  //       {
  //         name: 'tiempo',
  //         type: 'number',
  //         placeholder: 'ejemplo: 20'
  //       }      
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancelar',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: () => {
  //           console.log('Confirm Cancel');
  //         }
  //       }, {
  //         text: 'Aceptar',
  //         handler: (data) => {
  //           console.log('Confirm Ok', data);
  //           this.updateDespacho(data.tiempo);
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }

