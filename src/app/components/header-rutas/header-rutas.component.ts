import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-rutas',
  templateUrl: './header-rutas.component.html',
  styleUrls: ['./header-rutas.component.scss'],
})
export class HeaderRutasComponent  implements OnInit {

  @Input() titulo: string='';

  constructor() { }

  ngOnInit() {}

}
