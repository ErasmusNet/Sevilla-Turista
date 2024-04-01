import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'monumentos',
    loadComponent: () => import('./pages/monumentos/monumentos.page').then( m => m.MonumentosPage)
  },
  {
    path: 'poi',
    loadComponent: () => import('./pages/poi/poi.page').then( m => m.PoiPage)
  },
  {
    path: 'rutas',
    loadComponent: () => import('./pages/rutas/rutas.page').then( m => m.RutasPage)
  },
  {
    path: 'monumentsinfo',
    loadComponent: () => import('./pages/monumentsinfo/monumentsinfo.page').then( m => m.MonumentsinfoPage)
  },
  {
    path: 'parques',
    loadComponent: () => import('./pages/parques/parques.page').then( m => m.ParquesPage)
  },
  {
    path: 'parquesinfo',
    loadComponent: () => import('./pages/parquesinfo/parquesinfo.page').then( m => m.ParquesinfoPage)
  },
  {
    path: 'poi-info',
    loadComponent: () => import('./pages/poi-info/poi-info.page').then( m => m.PoiInfoPage)
  },
  {
    path: 'ruta1',
    loadComponent: () => import('./pages/ruta1/ruta1.page').then( m => m.Ruta1Page)
  },
  {
    path: 'ruta-info',
    loadComponent: () => import('./pages/ruta-info/ruta-info.page').then( m => m.RutaInfoPage)
  },
  {
    path: 'ruta2',
    loadComponent: () => import('./pages/ruta2/ruta2.page').then( m => m.Ruta2Page)
  },
  {
    path: 'ruta3',
    loadComponent: () => import('./pages/ruta3/ruta3.page').then( m => m.Ruta3Page)
  },
  {
    path: 'ruta4',
    loadComponent: () => import('./pages/ruta4/ruta4.page').then( m => m.Ruta4Page)
  },
  
];
