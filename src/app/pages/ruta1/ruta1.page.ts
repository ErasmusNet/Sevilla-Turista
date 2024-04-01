import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { RutaInfoPage } from '../ruta-info/ruta-info.page';
import { ComponentsModule } from "../../components/components.module";

@Component({
    selector: 'app-ruta1',
    templateUrl: './ruta1.page.html',
    styleUrls: ['./ruta1.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, ComponentsModule]
})
export class Ruta1Page implements OnInit {

  ruta: any[] = [];
  
  constructor( 
    private dataService: DataService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.loadData();
  }

  

  loadData() {
    const resp = this.dataService.getRutaUno();
    this.ruta = resp || [];
  }

  async sendData() {
    const modal = await this.modalCtrl.create({
      component: RutaInfoPage,
      backdropDismiss: false,
      componentProps: { ruta: this.ruta },
      mode: 'ios'
    });
    await modal.present();
    await modal.onDidDismiss();
  }

  

}


