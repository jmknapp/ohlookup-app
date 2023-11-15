import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchformPageRoutingModule } from './searchform-routing.module';

import { SearchformPage } from './searchform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchformPageRoutingModule
  ],
  declarations: [SearchformPage]
})
export class SearchformPageModule {}
