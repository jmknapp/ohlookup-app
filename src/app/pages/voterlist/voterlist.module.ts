import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoterlistPageRoutingModule } from './voterlist-routing.module';

import { VoterlistPage } from './voterlist.page';

import { VoterlistEntryComponent } from '../../components/voterlist-entry/voterlist-entry.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoterlistPageRoutingModule
  ],
  declarations: [
    VoterlistPage,
    VoterlistEntryComponent
  ]
})
export class VoterlistPageModule {}
