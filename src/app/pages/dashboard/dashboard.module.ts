import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";

@NgModule(
  {
    providers:[],
    declarations: [DashboardComponent],
    imports: [
      CommonModule,
      DashboardRoutingModule
    ]
  }
)

export class DashboardModule{}