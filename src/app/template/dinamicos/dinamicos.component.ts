import { Component } from '@angular/core';
import { Gamer, Favoritos } from '../interfaces/formulario-juegos-favoritos.interface';


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  //Valores Iniciales
  nuevoJuego: string = '';

  gamer: Gamer = {
    nombre:'Adonis',
    favoritos:[
      {id:1, nombre:'Pokemon Platino'},
      {id:2, nombre:'Yugioh! Master Duel'},
      {id:3, nombre:'Yugioh! Duel Links'},
      {id:4, nombre:'The Legend of Zelda Ocarina of Time'},
      {id:5, nombre:'Super Smash  Bros Ultmate'}

    ]
  }

  guardar(){
    console.log('Postear Formulario Dinámico');
  }
  eliminar(index: number){
    this.gamer.favoritos.splice(index,1);
  }
  agregarJuego(){
    const nuevoFavorito:Favoritos = {id:this.gamer.favoritos.length + 1, nombre:this.nuevoJuego};
    this.gamer.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }
}
