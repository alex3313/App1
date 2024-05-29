import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { HomePageRoutingModule } from './home-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {provideNativeDateAdapter} from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatSliderModule,
    MatDatepickerModule,
    MatFormFieldModule, MatInputModule, MatButtonModule,
    MatSlideToggleModule
    
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
