import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
import { RouterLink } from '@angular/router';
import { PipesModule } from "../../../pipes/pipes.module";

@Component({
    selector: 'app-monumentsinfo',
    templateUrl: './monumentsinfo.page.html',
    styleUrls: ['./monumentsinfo.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, ComponentsModule, PipesModule]
})
export class MonumentsinfoPage implements OnInit {

  @Input() data: any;
  local_data: any = {};

  constructor(
              private modalCtrl: ModalController) { }

  ngOnInit() {
    if (this.
      data) this.local_data = this.data;
    
  }


  salir(){
    this.modalCtrl.dismiss();
  }

 
  }




