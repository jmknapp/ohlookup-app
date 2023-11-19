import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoterdetailPageRoutingModule } from './voterdetail-routing.module';

import { VoterdetailPage } from './voterdetail.page';
import { VoterlistDetailComponent } from '../../components/voterlist-detail/voterlist-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoterdetailPageRoutingModule
  ],
  declarations: [
    VoterdetailPage,
    VoterlistDetailComponent
  ]
})
export class VoterdetailPageModule {}
