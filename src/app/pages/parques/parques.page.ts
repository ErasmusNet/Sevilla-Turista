import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { DataService } from 'src/app/services/data.service';
import { ParquesinfoPage } from '../parquesinfo/parquesinfo.page';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.page.html',
  styleUrls: ['./parques.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ComponentsModule]
})
export class ParquesPage implements OnInit {

  parques: any[] = [];
  
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
    const resp = this.dataservice.getParquesDesc();
    this.parques = resp || [];
  }

  async sendData(monument: any) {
    // console.log(monument);
    const modal = await this.modalCtrl.create({
      component: ParquesinfoPage,
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
    this.parques = this.parques.filter(parque => {
      if (parque.titulo.toLowerCase().includes(event.target.value.trim().toLowerCase()) || 
          parque.subtitulo.toLowerCase().includes(event.target.value.trim().toLowerCase())) {
        return parque;
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
