import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects-modal',
  templateUrl: './projects-modal.component.html',
  styleUrls: ['./projects-modal.component.css']
})
export class ProjectsModalComponent implements OnInit {

  constructor(private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.closeAll();
  }
  uploadProfilePhoto(files){
    console.log(files[0]);
  }
}
