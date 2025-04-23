import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePaths } from '../../utility/constants/route-paths';
import { AmlLayoutComponent } from './aml-layout.component';

const routes: Routes = [
  {
    path: RoutePaths.EMPTY,
    component: AmlLayoutComponent,
    children: [
      {
        path: RoutePaths.EMPTY,
        loadChildren: () =>
          import('../../modules/dialog-expirements/dialog-expirements.module').then(
            m => m.DialogExpirementsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmlLayoutRoutingModule {}
