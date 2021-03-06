import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../shared/services/data-service.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  cars = [];
  selectCar: any;
  valueCar: any = {};

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars(){
    this.dataService.getCollection('vehiculos').subscribe((data:any) =>{
      // var source = data.metadata.fromCache ? "local cache" : "server";
      console.log("Data came from " , data);
       this.cars = data.map((e: any) => {
        let source = e.payload.doc.metadata.fromCache ? "local cache" : "server";
         console.log(source, this.cars.length);
         
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as any;

     });

     console.log(this.cars);
     this.selectCar = this.cars[0];
     });
    }

    changeCar(car){
  
        console.log(car.target.value);
        // this.selectCar;

  }
  setIconType(tipo: string){
    let icon: string
    switch(tipo){
      case "camion": {
          icon = "assets/icon/truck.svg";
        break;
      }
      case "camioneta": {
        icon = "assets/icon/pickup.svg";
        break;
      }
      case "auto": {
        icon = "assets/icon/car.svg";
        break;
      }
      case "moto": {
        icon = "assets/icon/moto.svg";
        break;
      }
      case "bici": {
        icon = "assets/icon/bicycle.svg";
        break;
      }
    }

    return icon;
  }

  
}

