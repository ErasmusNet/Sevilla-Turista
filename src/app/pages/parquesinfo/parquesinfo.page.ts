import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from "../../../pipes/pipes.module";

@Component({
    selector: 'app-parquesinfo',
    templateUrl: './parquesinfo.page.html',
    styleUrls: ['./parquesinfo.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, ComponentsModule, PipesModule]
})
export class ParquesinfoPage implements OnInit {

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
