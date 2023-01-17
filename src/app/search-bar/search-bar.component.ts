import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor(private router: Router) {}
  
  searchDataMethod(enteredVal:any) {
    this.router.navigate(['/dining'], {state: {eVal: enteredVal}});
  }
}
