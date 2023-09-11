import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { CategoriaRoutingModule } from "./categoria-routing.module";
import { CategoriaComponent } from "./categoria.component";


@NgModule(
  {
    providers:[],
    declarations: [CategoriaComponent],
    imports: [
      CommonModule,
      CategoriaRoutingModule,
      NavbarModule,
      SidebarModule
    ]
  }
)

export class CategoriaModule{}