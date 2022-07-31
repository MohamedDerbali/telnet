import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['./estimation.component.css']
})
export class EstimationComponent implements OnInit {
  local_data: any;
  action: string;
  interval = {
    begin: undefined,
    end: undefined
  }
  constructor(private dialogRef: MatDialog,public dialogRefEst: MatDialogRef<EstimationComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private router:Router) {
    this.local_data = {...data};
    this.action = this.local_data.action;
    console.log(this.local_data);
  } 

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.closeAll();
  }
  generateReport(){
  if(this.interval&&this.interval.begin&&this.interval.end){
    this.local_data = {...this.local_data, ...this.interval};
    this.dialogRef.closeAll();
    this.router.navigateByUrl('/finalReport', { state: this.local_data });
  }

  
  }
  handleChange(e){
    this.interval[e.target.name] = e.target.value;
  }
}
