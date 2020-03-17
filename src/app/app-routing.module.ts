import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AllDevicesComponent } from './Components/all-devices/all-devices.component';
import { ActiveComponent } from './Components/active/active.component';
import {DeactiveComponent } from './Components/deactive/deactive.component';
import { OfflineComponent } from './Components/offline/offline.component';
import { GraphComponent } from './Components/graph/graph.component';


const routes: Routes = [
  {path:'',component: HomeComponent },
  {path:'home',component: HomeComponent },
  {path:'alldevices',component:AllDevicesComponent},
  {path:'activateddevices',component:ActiveComponent},
  {path:'disconnecteddevice',component:DeactiveComponent},
  {path:'offlinedevices',component: OfflineComponent},
  {path:'graph',component: GraphComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
