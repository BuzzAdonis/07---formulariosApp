import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {
  miFormulario: FormGroup = this.fb.group({
    nombre:[ , [Validators.required, Validators.minLength(3)] ],
    favoritos:this.fb.array([
      ['Pokemon Platino',Validators.required],
      ['Yugioh! Master Duel',Validators.required],
      ['Yugioh! Duel Links',Validators.required],
      ['The Legend of Zelda Ocarina of Time',Validators.required],
      ['Super Smash  Bros Ultmate',Validators.required]
  
    ],Validators.required)
  });
  
  nuevoFavorito: FormControl = this.fb.control('',Validators.required);

  get favoritosArr(): FormArray {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder){}

  campoEsValido(campo: string): boolean {
    return this.miFormulario.controls[campo].invalid && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
      return;
    }
   // this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
   this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  borrar(index: number){
   this.favoritosArr.removeAt(index);
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
