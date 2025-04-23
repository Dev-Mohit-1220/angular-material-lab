import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShortContnetComponent } from '../../../../shared/components/short-contnet/short-contnet.component';

@Component({
  selector: 'app-drag-drop-dialog',
  templateUrl: './drag-drop-dialog.component.html',
  styleUrl: './drag-drop-dialog.component.scss',
})
export class DragDropDialogComponent {
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(ShortContnetComponent);
  }
}
