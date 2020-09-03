/**
 * Title: bobs final
 * Author: Zachary Dahir
 * Date: 9-02-20
 * Description: alert dialog component
 */

import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})

export class AlertDialogComponent implements OnInit {

  //inputs
  @Input() selectedItemsList;
  @Input() total: number;
  @Input() partsCost: number;
  @Input() laborCost: number;

  today: number = Date.now();

  //constructor for dialog passing in data
  constructor(private dialogRef: MatDialogRef<AlertDialogComponent>,
  @Inject(MAT_DIALOG_DATA)data) {
    this.laborCost = data.laborCost, this.total = data.total, this.partsCost = data.partsCost, this.selectedItemsList = data.selectedItemsList;
  }

  ngOnInit(): void {
  }

}
