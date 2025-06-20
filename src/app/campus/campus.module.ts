import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampusRoutingModule } from './campus-routing.module';
import { CampusTablesComponent } from './tables/campus-tables.component';
import { WidgetsModule } from '../_metronic/partials';
import { CampusComponent } from './campus.component';
import { CrudModule } from 'src/app/modules/crud/crud.module';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCollapseModule, NgbDropdownModule, NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CollegeComponent } from './colleges/college-listing/college-listing.component';

@NgModule({
  declarations: [
    CampusComponent,
    CampusTablesComponent,
    CollegeComponent
  ],
  imports: [
    CommonModule,
    CampusRoutingModule,
    WidgetsModule,
    CrudModule,
    FormsModule,
    ReactiveFormsModule,   
    CrudModule,
    SharedModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbCollapseModule,
    NgbTooltipModule,
    SweetAlert2Module.forChild()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CampusModule {}
