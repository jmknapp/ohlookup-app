import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoterdetailPageRoutingModule } from './voterdetail-routing.module';

import { VoterdetailPage } from './voterdetail.page';
import { VoterdetailCardComponent } from 'src/app/components/voterdetail-card/voterdetail-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoterdetailPageRoutingModule
  ],
  declarations: [
    VoterdetailPage,
    VoterdetailCardComponent
  ]
})
export class VoterdetailPageModule {}
