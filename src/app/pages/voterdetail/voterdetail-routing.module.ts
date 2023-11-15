import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoterdetailPage } from './voterdetail.page';
import { VoterdetailPageModule } from './voterdetail.module';

const routes: Routes = [
  {
    path: '',
    component: VoterdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
  ]
})
export class VoterdetailPageRoutingModule {}
