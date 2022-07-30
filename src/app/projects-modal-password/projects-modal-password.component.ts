import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects-modal-password',
  templateUrl: './projects-modal-password.component.html',
  styleUrls: ['./projects-modal-password.component.css']
})
export class ProjectsModalPasswordComponent implements OnInit {

  constructor(private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.closeAll();
  }
}
