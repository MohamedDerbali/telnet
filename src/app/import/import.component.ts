import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as Papa from 'papaparse';
@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {
  dataCSV: any[]=[];
  constructor(private router:Router) { }

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
  manageRecord(e, item){
    this.router.navigateByUrl('/stepTwoReport', { state: item });
  }
}
