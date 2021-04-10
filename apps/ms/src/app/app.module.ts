import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataStructuresModule } from '@ms-challenge/data-structures';
import { AlogrithmsModule } from '@ms-challenge/alogrithms';
import { MergeSort } from 'libs/alogrithms/src/lib/merge-sort';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule,
    DataStructuresModule, AlogrithmsModule],
  providers: [MergeSort],
  bootstrap: [AppComponent],
})
export class AppModule { }
