import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DiningComponent } from './dining/dining.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


const routes: Routes = [
  {
    path : 'admin',
    component : AdminComponent
  },
  {
    path : 'menu-card',
    component : MenuCardComponent
  },
  {
    path : 'dining',
    component : DiningComponent
  },
  {
    path : 'search-bar',
    component : SearchBarComponent
  },
  {
    path : '',
    component : SearchBarComponent
  },
  {
    path : '**',
    component : SearchBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
