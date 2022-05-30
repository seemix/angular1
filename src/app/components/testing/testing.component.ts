import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../popup/popup.component";

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  public data = {
    caption: 'Hello',
    text: 'Angular is running in development mode. Call enableProdMode() to enable production mode.\n' +
      'index.js:551 [webpack-dev-server] Live Reloading enabled.'
  }

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDetails() {
    this.dialog.open(PopupComponent,{data: this.data})
  }
}
