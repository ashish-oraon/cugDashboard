import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import * as CanvasJS from "canvasjs";
import * as CanvasJS from '../../assets/canvasjs.min';

@Component({
  selector: 'app-cug-allocation',
  templateUrl: './cug-allocation.component.html',
  styleUrls: ['./cug-allocation.component.css']
})
export class CugAllocationComponent implements OnInit {
  loaderVisibility:boolean = true;
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.populate();
  }

  populate() {
    this.loaderVisibility = true;
    console.log('populate click event');
    this._dataService.getCugAllocationData({'type':'cug_allocation'}).subscribe((data) => {
      console.log(data);
      this.loaderVisibility = false;
      let chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          // text: "Basic Column Chart in Angular"
        },
        axisY: {
          title: "Cug Count",
          suffix: "",
          includeZero: false
        },
        axisX: {
          title: "Location"
        },
        data: [{
          type: "column",
          dataPoints: data
        }]
      });
      chart.render();

    });
  }

}
