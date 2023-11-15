import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'searchform',
    pathMatch: 'full'
  },
  {
    path: 'searchform',
    loadChildren: () => import('./pages/searchform/searchform.module').then( m => m.SearchformPageModule)
  },
  {
    path: 'voterlist',
    loadChildren: () => import('./pages/voterlist/voterlist.module').then( m => m.VoterlistPageModule)
  },
  {
    path: 'voterdetail',
    loadChildren: () => import('./pages/voterdetail/voterdetail.module').then( m => m.VoterdetailPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
