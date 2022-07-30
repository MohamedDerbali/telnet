import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects-modal-name',
  templateUrl: './projects-modal-name.component.html',
  styleUrls: ['./projects-modal-name.component.css']
})
export class ProjectsModalNameComponent implements OnInit {
  constructor(private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.closeAll();
  }
}
