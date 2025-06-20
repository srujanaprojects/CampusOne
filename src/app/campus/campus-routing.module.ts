import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampusTablesComponent } from './tables/campus-tables.component';
import { CampusComponent } from './campus.component';
import { CollegeComponent } from './colleges/college-listing/college-listing.component';

const routes: Routes = [
  {
    path: 'colleges',
    component: CampusComponent,
    children: [
      {
        path: 'lists',
        component: CollegeComponent,
      },
      { path: '', redirectTo: 'lists', pathMatch: 'full' },
      { path: '**', redirectTo: 'lists', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampusRoutingModule {}
