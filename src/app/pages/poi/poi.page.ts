import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { DataService } from '../../services/data.service';
import { PoiInfoPage } from '../poi-info/poi-info.page';

@Component({
  selector: 'app-poi',
  templateUrl: './poi.page.html',
  styleUrls: ['./poi.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ComponentsModule]
})
export class PoiPage implements OnInit {

  poi: any[] = [];
  
  constructor( 
    private dataService: DataService,
    private modalCtrl: ModalController,
    public element: ElementRef, 
    public renderer: Renderer2
    ) { }

  ngOnInit() {
    this.loadData();
  }

  

  loadData() {
    const resp = this.dataService.getPoiDesc();
    this.poi = resp || [];
  }

  async sendData(poi: any) {
    // console.log(monument);
    const modal = await this.modalCtrl.create({
      component: PoiInfoPage,
      backdropDismiss: false,
      componentProps: { data: poi },
      mode: 'ios'
    });
    await modal.present();
    await modal.onDidDismiss();
  }

  onSearchChange(event: any) {
    // RECARGA EL ARRAY COMPLETO
    this.loadData();
    // FILTRA EL ARRAY
    this.poi = this.poi.filter(punto => {
      if (punto.titulo.toLowerCase().includes(event.target.value.trim().toLowerCase()) || 
          punto.subtitulo.toLowerCase().includes(event.target.value.trim().toLowerCase())) {
        return punto;
      }
    });
  }

  ////////////////Header Dinámico///////////////////////////////
  @ViewChild("header") header: any;
  @ViewChild("content") content: any;
  @ViewChild("search") search: any;
  
  ionViewWillEnter() {
    this.renderer.setStyle(this.header['el'], 'webkitTransition', 'top 1000ms');
    this.renderer.setStyle(this.content['el'], 'webkitTransition', 'top 1000ms');
    this.renderer.setStyle(this.search['el'], 'webkitTransition', 'top 1000ms');
  }

  onContentScroll(event:any) {
    if (event.detail.scrollTop >= 50) {
      this.renderer.setStyle(this.header['el'], 'top', '-100px');
      this.renderer.setStyle(this.content['el'], 'top', '-62px');
      this.renderer.setStyle(this.search['el'], 'top', '-62px');
      
      
    } else {
      this.renderer.setStyle(this.header['el'], 'top', '0px');
      this.renderer.setStyle(this.content['el'], 'top', '0px');
      this.renderer.setStyle(this.search['el'], 'top', '0px');
    }



  }

}
