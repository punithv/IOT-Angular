import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { AllDevicesComponent } from './Components/all-devices/all-devices.component';
import { ActiveComponent } from './Components/active/active.component';
import { DeactiveComponent } from './Components/deactive/deactive.component';
import { OfflineComponent } from './Components/offline/offline.component';
import { NgtableComponent } from './Components/ngtable/ngtable.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpserviceService} from 'src/app/Services/httpservice.service';
import { AgGridModule } from 'ag-grid-angular/main';
import { RouterModule } from '@angular/router';
import { GraphComponent } from './Components/graph/graph.component';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { LinegraphComponent } from './Components/linegraph/linegraph.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllDevicesComponent,
    ActiveComponent,
    DeactiveComponent,
    OfflineComponent,
    NgtableComponent,
    GraphComponent,
    LinegraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    RouterModule,
    AgGridModule.withComponents([NgtableComponent]),
    ChartsModule
    
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
