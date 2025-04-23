import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmlLayoutRoutingModule } from './aml-layout-routing.module';
import { AmlLayoutComponent } from './aml-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AmlLayoutComponent],
  imports: [CommonModule, AmlLayoutRoutingModule, RouterModule],
})
export class AmlLayoutModule {}
