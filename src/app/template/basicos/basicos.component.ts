import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FromluarioProducto } from '../interfaces/formulario-productos-template.interfaces';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
  
  @ViewChild('miFormulario') miFormulario!: NgForm;
  //Valores iniciales
  initForm:FromluarioProducto = {
    producto : 'Rtx 4080ti',
    precio   : 1000,
    exitencia: 10
  }

  constructor(){}

  // guardar(miFormulario: NgForm){
  guardar(){
    // console.log(this.miFormulario);
    console.log("Postear Formulario Básico")
    this.miFormulario.resetForm({
      producto:'Algo',
      precio:0,
      exitencia:0
    });
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto']?.touched;
  }

  precioValido(): boolean {
    return this.miFormulario?.controls['precio']?.invalid && this.miFormulario?.controls['precio']?.touched && this.miFormulario?.controls['precio']?.value < 0;
  }
  
}
