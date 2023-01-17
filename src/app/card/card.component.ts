import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KitchenServiceService } from '../kitchen-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  kitchenData:any = [];
  filteredKitchen:any = [];
  // constructor(private router: Router) {}
  enteredData:any;
  constructor(private kitData: KitchenServiceService, private router: Router) {

    this.enteredData = this.router.getCurrentNavigation()?.extras?.state?.['eVal'];
  }
 
  ngOnInit(): void {
    this.kitchenData = this.kitData.kitchenHotelsData;
  
  }
  
  kitFind(name:any, cuisines:any, address:any,rating:any, review:any, arrMenu:any) {
    this.router.navigate(['/menu-card'],{state: {n: name, cuisi: cuisines, add: address, rat:rating, rew: review, kitArr: arrMenu} });
  }
  
}
