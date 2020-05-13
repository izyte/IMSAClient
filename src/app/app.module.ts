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
import { MainFrameComponent } from './cmp/main-frame/main-frame.component';
import { TreeViewComponent } from './api/cmp/tree-view/tree-view.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// contains all module imports related to Angular Materials/CDK
import { MaterialModule } from './material.module';

import { AnomalyComponent } from './cmp/anomaly/anomaly.component';
import { DesignDataComponent } from './cmp/design-data/design-data.component';
import { ChemicalDatabaseComponent } from './cmp/chemical-database/chemical-database.component';
import { SurveyDataComponent } from './cmp/survey-data/survey-data.component';
import { FreespanComponent } from './cmp/freespan/freespan.component';
import { SeismicComponent } from './cmp/seismic/seismic.component';
import { ReferenceLibraryComponent } from './cmp/reference-library/reference-library.component';
import { UserManagementComponent } from './cmp/user-management/user-management.component';
import { AssetManagementComponent } from './cmp/asset-management/asset-management.component';
import { RiskBasedInspectionComponent } from './cmp/risk-based-inspection/risk-based-inspection.component';
import { SurveyUploadComponent } from './cmp/survey-upload/survey-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    SandTestAComponent,
    SandTestBComponent,
    MainFrameComponent,
    TreeViewComponent,
    AnomalyComponent,
    DesignDataComponent,
    ChemicalDatabaseComponent,
    SurveyDataComponent,
    FreespanComponent,
    SeismicComponent,
    ReferenceLibraryComponent,
    UserManagementComponent,
    AssetManagementComponent,
    RiskBasedInspectionComponent,
    SurveyUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AppDataset,AppCommonMethodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
