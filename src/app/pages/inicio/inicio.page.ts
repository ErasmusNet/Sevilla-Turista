import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, MenuController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { DataService } from '../../services/data.service';
import { PipesModule } from "../../../pipes/pipes.module";

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, RouterModule, ComponentsModule, PipesModule]
})
export class InicioPage implements OnInit {

  datos: any [] = [];
  textoBuscar: string ='';

  constructor( private menuCtrl: MenuController, 
          private dataservice: DataService) { }

  ngOnInit() {
  
  }

  

  mostrarMenu(){
    this.menuCtrl.open();
  }
}
