import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { faLeaf, faRoute } from '@fortawesome/free-solid-svg-icons';
import { faLandmark } from '@fortawesome/free-solid-svg-icons';
import { faTreeCity } from '@fortawesome/free-solid-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';







@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule, FontAwesomeModule, ComponentsModule, HttpClientModule],
})
export class AppComponent implements OnInit{
  
  ruta = faRoute;
  mon = faLandmark;
  sev = faTreeCity;
  poi = faMapLocationDot;
  parque = faLeaf;


   ngOnInit() {
     
   }


  constructor( 
    
  ) {}

}




