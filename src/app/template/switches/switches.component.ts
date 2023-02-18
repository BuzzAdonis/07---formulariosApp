import { Component } from '@angular/core';
import { Opciones } from '../interfaces/formulario-switches-opciotion.interface';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent {
//Valores Pre Determinoados
  persona:Opciones ={
    genero        : 'F',
    notificaciones: true
  }

  terminosYcondicioen: boolean = false;
}
