import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ShortContentComponent } from './components/short-content/short-content.component';

@NgModule({
  declarations: [ShortContentComponent],
  imports: [CommonModule, MatCardModule, DragDropModule],
  exports: [ShortContentComponent],
})
export class SharedModule {}
