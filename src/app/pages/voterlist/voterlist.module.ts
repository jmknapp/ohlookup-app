import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoterlistPageRoutingModule } from './voterlist-routing.module';

import { VoterlistPage } from './voterlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoterlistPageRoutingModule
  ],
  declarations: [VoterlistPage]
})
export class VoterlistPageModule {}
