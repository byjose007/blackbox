import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {
  pedido: any;

  costoEnvio = 1.50;
  // pedido: any;
  acepted = false;
  transportista: any;

  constructor(private router: Router,
              // private callNumber: any,
              // private toastService: ToastService,
              public alertController: AlertController,
              public modalController: ModalController,
              // private genericService: GenericService,
              // public socketService: SocketService
              ) { }


  ngOnInit() {

    this.pedido = this.router.getCurrentNavigation().extras.state;
    console.log(this.pedido, 'pedido en detalle');
    this.transportista = JSON.parse(localStorage.getItem('user'));

  }


  callPhone(phone) {
   
  }

  verUbicacion() {
    this.router.navigate(['ubicacion'], { state: this.pedido });

  }

  gotoEntrega() {
    this.router.navigate(['signature'], { state: this.pedido });
  }


  // async aceptarPedido() {
  //   const modal = await this.modalController.create({
  //     component: ModalTiempoPage
  //   });

  //   modal.onDidDismiss()
  //     .then((dataDismiss: any) => {
  //       if (dataDismiss.data.tiempo) {
  //         console.log('DISMISS');

  //         this.updateDespacho(dataDismiss.data.tiempo);
  //       }
  //     });

  //   return await modal.present();
  // }

  updateDespacho(tiempo) {

    const data = {
      id: this.pedido._id,
      estadoDespacho: 'preparadoTrans',
      idTransportista: this.transportista._id,
      tiempoEstimado: tiempo
    }

    // this.genericService.updateDespacho(data).subscribe(data => {

    //   console.log(data, 'DESPACHO ACTUALIZADO');
    //   this.socketService.senDataDispatch(data);
    //   this.router.navigate(['home']);

    // });
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

