import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { DespesaRoutingModule } from "./despesa-routing.module";
import { DespesaComponent } from "./despesa.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule(
  {
    providers:[],
    declarations: [DespesaComponent],
    imports: [
      CommonModule,
      DespesaRoutingModule,
      NavbarModule,
      SidebarModule,
      FormsModule,
      ReactiveFormsModule,
      NgSelectModule
    ]
  }
)

export class DesepsaModule{}