/**
 * Title: bobs final
 * Author: Zachary Dahir
 * Date: 9-02-20
 * Description: home component
 */

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  //arrays initialization
  selectedItemsList = [];
  checkedIDs = [];
  checkedValues = [];

  //var initialization
  total: number;
  partsCost = 0;
  laborCost = 0;


  constructor(private dialog: MatDialog) {}

  //function to open dialog and passing values
  openDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      width: '25%',
      data: {selectedItemsList: this.selectedItemsList, total: this.total, partsCost: this.partsCost, laborCost: this.laborCost}
    });
  }

  //checkbox array
  checkboxesDataList = [
     {
        name: "Password Reset",
        value: 39.99,
        id: 'passwordReset',
        label: 'Password Reset - $39.99',
        isChecked: false
      },
      {
        name: "Spyware Removal",
        value: 99.99,
        id: 'spywareRemoval',
        label: 'Spyware Removal - $99.99',
        isChecked: false
      },
      {
        name: "Ram Upgrade",
        value: 129.99,
        id: 'ramUpgrade',
        label: 'Ram Upgrade - $129.99',
        isChecked: false
      },
      {
        name: "Spyware Installation",
        value: 49.99,
        id: 'spywareInstallation',
        label: 'Spyware Installation - $49.99',
        isChecked: false
      },
      {
        name: "Tune Up",
        value: 89.99,
        id: 'tuneUp',
        label: 'Tune Up - $89.99',
        isChecked: false
      },
      {
        name: "Keyboard Cleaning",
        value: 45.00,
        id: 'keyboardCleaning',
        label: 'Keyboard Cleaning - $45.00',
        isChecked: false
      },
      {
        name: "Disk Clean Up",
        value: 149.99,
        id: 'diskCleanUp',
        label: 'Disk Clean Up - $149.99',
        isChecked: false
      }
  ]

  ngOnInit(): void {
    this.total = 0;
    this.fetchSelectedItems()
    this.fetchCheckedIDs()
  }

  //function to reset total on change an call others to get new total as well as checkedIDs
  changeSelection() {
    this.total = 0;
    this.fetchSelectedItems()
    this.fetchCheckedIDs()
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked
    });
  }

  //push checked ids to array and get total
  fetchCheckedIDs() {
    this.checkedIDs = []
    this.checkboxesDataList.forEach((value, index) => {

      if (value.isChecked) {
        this.checkedIDs.push(value.id);
        this.total += value.value;
      }
    });

  }


  /*fetchCheckedValues() {
    this.checkedValues = []
    this.checkboxesDataList.forEach((value, index) => {
      if (value.isChecked) {

        this.checkedValues.push(value.value);
        this.total += value.value;
      }

    });

  }
  */
}
