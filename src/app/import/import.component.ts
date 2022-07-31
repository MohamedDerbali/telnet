import { Component, OnInit } from '@angular/core';
// import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import * as Papa from 'papaparse';
@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {
  dataCSV: any[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  uploadCSVFile = (files) => {
    Papa.parse(files[0], {
      header: true,
      skipEmptyLines: true,
      complete: (result, file) => {
        console.log(result);
        this.dataCSV = result.data;
      }
    });
  }
}
