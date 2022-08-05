import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { CdkComponent } from './components/cdk/cdk.component';

@NgModule({
  declarations: [AppComponent, GridComponent, CdkComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatGridListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
