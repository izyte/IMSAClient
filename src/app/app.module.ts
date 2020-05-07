import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// application specific core component imports
import { HttpClientModule } from '@angular/common/http';


// application specific providers
import { AppDataset } from './svc/app-dataset.service';

// custom components
import { SandTestAComponent } from './cmp/sand-test-a/sand-test-a.component';
import { AppCommonMethodsService } from './api/svc/app-common-methods.service';
import { SandTestBComponent } from './cmp/sand-test-b/sand-test-b.component';


@NgModule({
  declarations: [
    AppComponent,
    SandTestAComponent,
    SandTestBComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AppDataset,AppCommonMethodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
