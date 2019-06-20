import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CugAllocationComponent } from './cug-allocation/cug-allocation.component';
import { ThresholdComponent } from './threshold/threshold.component';
import { OrphanComponent } from './orphan/orphan.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CugAllocationComponent,
    ThresholdComponent,
    OrphanComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
