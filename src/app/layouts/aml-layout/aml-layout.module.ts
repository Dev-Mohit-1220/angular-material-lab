import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmlLayoutRoutingModule } from './aml-layout-routing.module';
import { AmlLayoutComponent } from './aml-layout.component';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [AmlLayoutComponent],
  imports: [CommonModule, AmlLayoutRoutingModule, RouterModule, DragDropModule],
})
export class AmlLayoutModule {}
