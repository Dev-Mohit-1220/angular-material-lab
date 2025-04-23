import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortContnetComponent } from './components/short-contnet/short-contnet.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ShortContnetComponent],
  imports: [CommonModule, MatCardModule],
})
export class SharedModule {}
