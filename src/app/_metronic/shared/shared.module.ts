import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {KeeniconComponent} from './keenicon/keenicon.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    KeeniconComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    KeeniconComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
}
