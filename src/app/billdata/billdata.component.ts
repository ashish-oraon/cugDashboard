import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { IBillData } from "../models/ibill-data";

@Component({
  selector: 'app-billdata',
  templateUrl: './billdata.component.html',
  styleUrls: ['./billdata.component.css']
})
export class BilldataComponent implements OnInit {


  tableLoaderVisibility: boolean = false;
  billMonthSelected = '8';
  billYearSelected = '2018';
  employeeStatus = 'Active';
  reportType = 'bill';
  page: Number = 1;
  tableData: IBillData = {
    "total_count": -1,
    "items": []
  };

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
    this.populateBillTable();
  }
  populateBillTable() {
    this.tableLoaderVisibility = true;
    let reqOption = {
      'type': 'getBilldata',
      'month': this.billMonthSelected,
      'year': this.billYearSelected,
      't_status': this.employeeStatus,
      't_type' : this.reportType,
      'p_no': this.page
    }
    this._dataService.getBillReportData(reqOption).subscribe((result) => {
      console.log('generating billdata');
      console.log(result);
      this.tableData = result;
    });
  }
  triggerpagination(p: Number) {
    console.log(p);
    this.page = p;
    this.populateBillTable();
  }
}
