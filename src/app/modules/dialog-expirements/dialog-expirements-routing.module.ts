import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePaths } from '../../utility/constants/route-paths';
import { DragDropDialogComponent } from './components/drag-drop-dialog/drag-drop-dialog.component';

const routes: Routes = [
  {
    path: RoutePaths.EMPTY,
    component: DragDropDialogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DialogExpirementsRoutingModule {}
