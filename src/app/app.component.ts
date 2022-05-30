import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CARS';

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.authService.isAuthorization()){
      this.router.navigate(['cars'])
    }
      }
}
