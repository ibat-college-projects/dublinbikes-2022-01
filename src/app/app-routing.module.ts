import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DublinbikeComponent } from './components/dublinbike/dublinbike.component';
import { StationDetailComponent } from './components/station-detail/station-detail.component';


const routes: Routes = [

  {path: 'stations', component:DublinbikeComponent},
  {path: 'station/:id', component:StationDetailComponent},
  {path: '', component:DublinbikeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
