import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../../shared/services/data-service.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.page.html',
  styleUrls: ['./car-list.page.scss'],
})
export class CarListPage implements OnInit {
  iconType: string;
  typeVehicle: any;
  cars: any;

  constructor(private dataService: DataServiceService, private router: Router) { }

  ngOnInit() {
     this.dataService.getCollection('vehiculos').subscribe((data:any) =>{
      // var source = data.metadata.fromCache ? "local cache" : "server";
      console.log("Data came from " , data);
       this.cars = data.map((e: any) => {
        let source = e.payload.doc.metadata.fromCache ? "local cache" : "server";
         console.log(source);
         
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as any;

     });

     console.log(this.cars);
    

    
     });
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

  detail(car){
    console.log('detalle');
    
    this.router.navigate(['car/carForm'], {state: car});


  }

}
