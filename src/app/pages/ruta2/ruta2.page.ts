import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ComponentsModule } from "../../components/components.module";
import { RutaInfoPage } from '../ruta-info/ruta-info.page';

@Component({
    selector: 'app-ruta2',
    templateUrl: './ruta2.page.html',
    styleUrls: ['./ruta2.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, ComponentsModule]
})
export class Ruta2Page implements OnInit {

  ruta: any[] = [];
  
  constructor( 
    private dataService: DataService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.loadData();
  }

  

  loadData() {
    const resp = this.dataService.getRutaDos();
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

