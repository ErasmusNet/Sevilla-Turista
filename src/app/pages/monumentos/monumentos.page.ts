import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { DataService } from '../../services/data.service';
import { MonumentsinfoPage } from '../monumentsinfo/monumentsinfo.page';
import { log } from 'console';



@Component({
  selector: 'app-monumentos',
  templateUrl: './monumentos.page.html',
  styleUrls: ['./monumentos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ComponentsModule]
})

export class MonumentosPage implements OnInit {

  monuments: any[] = [];

  constructor(
    private dataservice: DataService,
    private modalCtrl: ModalController,
    public element: ElementRef, 
    public renderer: Renderer2
  ) { }

  ngOnInit() {
    this.loadData();
  }


  loadData() {
    const resp = this.dataservice.getMonumentsDesc();
    this.monuments = resp || [];
  }

  async sendData(monument: any) {
    const modal = await this.modalCtrl.create({
      component: MonumentsinfoPage,
      backdropDismiss: false,
      componentProps: { data: monument },
      mode: 'ios'
    });
    await modal.present();
    await modal.onDidDismiss();
  }

  onSearchChange(event: any) {
    // RECARGA EL ARRAY COMPLETO
    this.loadData();
    // FILTRA EL ARRAY
    this.monuments = this.monuments.filter(monument => {
      if (monument.titulo.toLowerCase().includes(event.target.value.trim().toLowerCase()) || 
          monument.subtitulo.toLowerCase().includes(event.target.value.trim().toLowerCase())) {
        return monument;
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
