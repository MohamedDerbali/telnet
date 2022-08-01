import { Component, OnInit } from '@angular/core';
import { AppServicesService } from '../app-services.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  userConnected :any;
  archiveData: any= {
    annee: 2020,
    mois: 1,
    jour: 1,
  };
  reports: any = [];
  constructor(private appServicesService: AppServicesService) { }

  ngOnInit(): void {
    let connectedUserToken = localStorage.getItem('token');
    this.appServicesService
      .getDataFromToken(connectedUserToken)
      .subscribe((res) => {
        this.userConnected = res;
      });
  }
  changeMonth(mois){
    this.archiveData.mois = mois;
    this.appServicesService
    .generateArchive(this.archiveData.annee,this.archiveData.mois)
    .subscribe((res) => {
      this.reports = res;
    }
    );
  }
  changeYear(years){
    this.archiveData.annee = years;
    this.appServicesService
    .generateArchive(this.archiveData.annee,this.archiveData.mois)
    .subscribe((res) => {
      this.reports = res;
    }
    );
  }

}
