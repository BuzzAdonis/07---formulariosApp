import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Opciones } from 'src/app/template/interfaces/formulario-switches-opciotion.interface';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero        :['M',Validators.required],
    notificaciones:[true, Validators.required],
    terminos      :[false, [Validators.required, Validators.requiredTrue]] 
  });

  persona:Opciones ={
    genero        : 'F',
    notificaciones:true
  } 

  terminosYcondicioen: boolean = false;
  
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      terminos: this.terminosYcondicioen
    });

    this.miFormulario.valueChanges.subscribe( ({terminos, ...restoDeArgumentos}) =>{
     // delete form['terminos'];
      this.persona = restoDeArgumentos;
  });
}

  guardar(){
   const formValue =  {...this.miFormulario.value};
   delete formValue['terminos'];
   this.persona = formValue;
  }

}
