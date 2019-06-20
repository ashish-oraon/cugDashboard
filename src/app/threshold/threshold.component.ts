import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import * as CanvasJS from '../../assets/canvasjs.min';

@Component({
  selector: 'app-threshold',
  templateUrl: './threshold.component.html',
  styleUrls: ['./threshold.component.css']
})
export class ThresholdComponent implements OnInit {
  barLoaderVisibility: boolean = true;
  pieLoaderVisibility: boolean = true;

  thresholdMonthSelected: string;
  thresholdYearSelected: string;

  months = [
    {
      'title': 'Jan',
      'value': '1'
    },
    {
      'title': 'Feb',
      'value': '2'
    },
    {
      'title': 'March',
      'value': '3'
    },
    {
      'title': 'April',
      'value': '4'
    },
    {
      'title': 'May',
      'value': '5'
    },
    {
      'title': 'June',
      'value': '6'
    },
    {
      'title': 'July',
      'value': '7'
    },
    {
      'title': 'August',
      'value': '8'
    },
    {
      'title': 'Septmeber',
      'value': '9'
    },
    {
      'title': 'October',
      'value': '10'
    },
    {
      'title': 'November',
      'value': '11'
    },
    {
      'title': 'December',
      'value': '12'
    }
  ];




  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.thresholdMonthSelected = '10';
    this.thresholdYearSelected = '2018';
    this.populateBarChart();
    this.populatePieChart();
  }

  changeChartData() {
    this.populateBarChart();
    this.populatePieChart();
  }

  populateBarChart() {
    this.barLoaderVisibility = true;
    console.log('populate click event');
    this._dataService.getThresholdData({ 'type': 'threshold', 'month': this.thresholdMonthSelected, 'year': this.thresholdYearSelected }).subscribe((data) => {
      console.log(data);
      this.barLoaderVisibility = false;
      let chart = new CanvasJS.Chart("barChartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Threshold"
        },
        axisY: {
          title: "Cug Count",
          suffix: "",
          includeZero: false
        },
        axisX: {
          title: "Breach Status"
        },
        data: [{
          type: "column",
          dataPoints: data
        }]
      });
      chart.render();

    });
  }
  populatePieChart() {
    // this.pieLoaderVisibility = true;
    this._dataService.getThresholdData({ 'type': 'threshold_plant', 'month': this.thresholdMonthSelected, 'year': this.thresholdYearSelected }).subscribe((data) => {
      console.log(data);
      data[0].exploded = true;
      let chart = new CanvasJS.Chart("pieChartContainer", {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Threshold Breach Share"
        },
        subtitles: [{
          text: "In " + this.thresholdMonthSelected + "-" + this.thresholdYearSelected
        }],
        data: [{
          type: "pie",
          startAngle: 40,
          legendText: "{name}",
          indexLabelFontSize: 16,
          showInLegend: true,
          toolTipContent: "<b>{name}</b>: {y}%",
          // toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
          indexLabel: "{name} - {y}%",
          // indexLabel: "{name} - #percent%",
          // dataPoints: [
          //   { y: 450, name: "Food" },
          //   { y: 120, name: "Insurance" },
          //   { y: 300, name: "Traveling" },
          //   { y: 800, name: "Housing" },
          //   { y: 150, name: "Education" },
          //   { y: 150, name: "Shopping" },
          //   { y: 250, name: "Others" }
          // ]
          dataPoints: data
        }]
      });

      chart.render();

    });
  }
}
