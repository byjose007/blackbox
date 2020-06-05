import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../shared/services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
  }

  alarm()
{
  this.dataService.launchLocalNotification();
}

 

}
