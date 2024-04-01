import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonicModule, ModalController, } from '@ionic/angular';
import { ComponentsModule } from "../../components/components.module";
import { PipesModule } from "../../../pipes/pipes.module";
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-ruta-info',
  templateUrl: './ruta-info.page.html',
  styleUrls: ['./ruta-info.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ComponentsModule, PipesModule]
})
export class RutaInfoPage implements OnInit {

  @ViewChild('content') content: IonContent = Object.create(null);
  @Input() ruta: any[] = [];
  ind: number = 0;
  max: number = 10;


  constructor(
    private dataService: DataService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.max = this.ruta.length - 1;
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  nextStep() { 
    
    if (this.ind < this.max) {
      this.ind++;
      this.content.scrollToTop();
    }
  }


}
