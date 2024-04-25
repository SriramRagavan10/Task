import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';

const routes: Routes = [
  { path: "interpolation", component: InterpolationComponent },
  { path: "eventbinding", component: EventBindingComponent },
  { path: "propertybinding", component: PropertyBindingComponent },
  { path: "twowaybinding", component: TwoWayBindingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
