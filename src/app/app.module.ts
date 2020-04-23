import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// application specific providers
import { AppDataset } from './svc/app-dataset.service';

// custom components
import { SandTestAComponent } from './cmp/sand-test-a/sand-test-a.component';


@NgModule({
  declarations: [
    AppComponent,
    SandTestAComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AppDataset],
  bootstrap: [AppComponent]
})
export class AppModule { }
