import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { DespesaRoutingModule } from "./despesa-routing.module";
import { DespesaComponent } from "./despesa.component";


@NgModule(
  {
    providers:[],
    declarations: [DespesaComponent],
    imports: [
      CommonModule,
      DespesaRoutingModule,
      NavbarModule,
      SidebarModule
    ]
  }
)

export class DesepsaModule{}