import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogExpirementsRoutingModule } from './dialog-expirements-routing.module';
import { DragDropDialogComponent } from './components/drag-drop-dialog/drag-drop-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DragDropDialogComponent],
  imports: [
    CommonModule,
    DialogExpirementsRoutingModule,
    MatDialogModule,
    MatButtonModule,
    SharedModule,
  ],
})
export class DialogExpirementsModule {}
