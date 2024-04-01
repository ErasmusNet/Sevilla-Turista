import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { ComponentsModule } from "../../components/components.module";
import { DataService } from 'src/app/services/data.service';
import { RutaInfoPage } from '../ruta-info/ruta-info.page';

@Component({
    selector: 'app-ruta3',
    templateUrl: './ruta3.page.html',
    styleUrls: ['./ruta3.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, ComponentsModule]
})
export class Ruta3Page implements OnInit {

  ruta: any[] = [];
  
  constructor( 
    private dataService: DataService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.loadData();
  }

  

  loadData() {
    const resp = this.dataService.getRutaTres();
    this.ruta = resp || [];
  }

  async sendData() {
    // console.log(monument);
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
