import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private router: Router) {}

  validate(username:any, userpass:any) {
    if(username=="admin@kitchen" && userpass=="admin@123") {
      // logic to navigate
      this.router.navigate(['/', 'dining']);
    }else {
      alert("Invalid Credentials ...!")
    }
  }
}
