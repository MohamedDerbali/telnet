import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppServicesService } from '../app-services.service';
import { EstimationComponent } from '../estimation/estimation.component';

@Component({
  selector: 'app-step-two-report',
  templateUrl: './step-two-report.component.html',
  styleUrls: ['./step-two-report.component.css']
})
export class StepTwoReportComponent implements OnInit {
  routeData: any;
  JsonDataParsing: any[];
  dialogConfig = new MatDialogConfig();
  modalDialog: MatDialogRef<EstimationComponent, any> | undefined;
  constructor(private router:Router, appServicesService: AppServicesService, public matDialog: MatDialog,) {
    this.routeData = this.router.getCurrentNavigation().extras.state;
    const dataItems= {
      data: this.routeData["Data"],
      msg_id: this.routeData["Message Id"]
    }
    appServicesService.search(dataItems).subscribe((res) => {
      this.JsonDataParsing = JSON.parse(res);
      console.log(JSON.parse(res))
    });
    
   }
   openModal(item) {
    
    this.dialogConfig.id = "Estimation-modal-component";
    this.dialogConfig.height = "450px";
    this.dialogConfig.width = "450px";
    this.dialogConfig.data = {
      dataFromApi: item,
      csvData: this.routeData
    };
    // 
    this.modalDialog = this.matDialog.open(EstimationComponent, this.dialogConfig);
  }
  ngOnInit(): void { 
  }
  manageDatas(item){
    console.log(item);
  }
}
