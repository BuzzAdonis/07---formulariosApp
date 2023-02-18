import { Component } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {

  templateMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta : './template/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta : './template/dinamicos'
    },
    {
      texto: 'Switches',
      ruta : './template/switches'
    }
  ];

  reactiveMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta : './reactive/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta : './reactive/dinamicos'
    },
    {
      texto: 'Switches',
      ruta : './reactive/switches'
    }
  ];

  authMenu:MenuItem[] = [
    {
      texto: 'Login',
      ruta : './auth/login'
    },
    {
      texto: 'Registro',
      ruta : './auth/registro'
    }
  ]

}
