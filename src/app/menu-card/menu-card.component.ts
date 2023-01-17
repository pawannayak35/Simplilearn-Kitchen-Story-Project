import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit{

  kitArrD:any = [];
  nameH:any;
  cuisines:any;
  address:any;
  ratingH:any;
  reviewsH:any;
  constructor(private router: Router) {
    this.kitArrD = this.router.getCurrentNavigation()?.extras.state?.['kitArr'];
    this.nameH = this.router.getCurrentNavigation()?.extras.state?.['n'];
    this.cuisines = this.router.getCurrentNavigation()?.extras.state?.['cuisi'];
    this.address = this.router.getCurrentNavigation()?.extras.state?.['add'];
    this.ratingH = this.router.getCurrentNavigation()?.extras.state?.['rat'];
    this.reviewsH = this.router.getCurrentNavigation()?.extras.state?.['rew'];
    // console.log(this.kitArrD);
    // console.log(this.nameH);
    // console.log(this.cuisines);
    // console.log(this.address);
    // console.log(this.ratingH);
    // console.log(this.reviewsH);
  }

  orderBooked(foodName:any, foodPrice:any) {
    alert("Your Order "+ foodName +" Successfully Booked ! and You need to Pay : "+foodPrice);
    this.router.navigate(['/','search-bar']);
  }

  ngOnInit(): void {
  }


  
}
