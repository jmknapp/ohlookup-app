import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchformPage } from './searchform.page';

const routes: Routes = [
  {
    path: '',
    component: SearchformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchformPageRoutingModule {}
