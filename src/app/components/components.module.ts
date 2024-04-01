import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { HeaderRutasComponent } from './header-rutas/header-rutas.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderRutasComponent
    
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeaderRutasComponent
    
  ],
})
export class ComponentsModule { }
