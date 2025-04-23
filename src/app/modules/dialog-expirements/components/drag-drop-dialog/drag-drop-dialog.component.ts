import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShortContentComponent } from '../../../../shared/components/short-content/short-content.component';

@Component({
  selector: 'aml-drag-drop-dialog',
  templateUrl: './drag-drop-dialog.component.html',
  styleUrl: './drag-drop-dialog.component.scss',
})
export class DragDropDialogComponent {
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(ShortContentComponent, {
      hasBackdrop: false,
    });
  }
}
