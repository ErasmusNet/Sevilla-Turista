import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';
import { SafePipe } from './safe.pipe';



@NgModule({
  declarations: [
    FiltroPipe, SafePipe
  ],
  exports:[FiltroPipe, SafePipe]
})
export class PipesModule { }
