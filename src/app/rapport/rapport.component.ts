import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServicesService } from '../app-services.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {
  routeData: any;
  currentDate:Date = new Date();
  userConnected :any;
  constructor(private router:Router, private appServicesService: AppServicesService) {
    this.routeData = this.router.getCurrentNavigation().extras.state;
    console.log(this.routeData);
   }
  ngOnInit(): void {
    let connectedUserToken = localStorage.getItem('token');
    this.appServicesService
      .getDataFromToken(connectedUserToken)
      .subscribe((res) => {
        this.userConnected = res;
      });
  }
  comments(){
    let results = this.routeData["dataFromApi"]["resultat en decimale"];
    let {begin,end} = this.routeData
    console.log(results)
    console.log(begin,end)
    if(results>=parseInt(begin)&&results<=parseInt(end)){
      return `L'appareil fonctionne correctement`;
    }
    return `L'appareil est défectueux`;
  }
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('rapport.pdf');
    });
  }
}
