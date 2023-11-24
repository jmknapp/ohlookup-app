import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
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
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then( m => m.HelpPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
