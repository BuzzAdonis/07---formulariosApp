import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { emailPattern, noPuedeSerMegamanDX, nombreApellidoPattern } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[ Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern) ]],
    email: ['',[ Validators.required, Validators.email, Validators.pattern(this.validatorService.emailPattern) ],[this.emailValidator]],
    username:['',[ Validators.required, this.validatorService.noPuedeSerMegamanDX]],
    password:['',[ Validators.required, Validators.minLength(6)]],
    password2:['',[ Validators.required, ]],

  },{
    validators:[this.validatorService.camposIguales('password','password2')]
  });

  get emailErrorMsg(): string{
    const errors = this.miFormulario.get('email')?.errors;

    if (errors?.['required'] ){
      return 'El correo es obligatorio.'
    } else if (errors?.['pattern'] ){
      return 'Formato de correo inválido.'
    } else if (errors?.['emailTomado'] ){
      return 'Este correo está en uso.'
    } 
    return '';


  } 

  constructor(private fb:FormBuilder,
              private validatorService:ValidatorService,
              private emailValidator:EmailValidatorService){}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre   : 'Adonis Severino',
      email    : 'test1@test.com',
      username : 'I_am_Batman',
      password : '123456',
      password2: '123456'
    })
  }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
