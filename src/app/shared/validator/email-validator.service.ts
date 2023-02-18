import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, map } from 'rxjs';
import { User } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(private http: HttpClient) { }

  validate(control: AbstractControl):  Observable<ValidationErrors | null> {
    const email = control.value;
    return this.http.get<User[]>(`http://localhost:3000/usuarios?q=${ email }`)
                .pipe(
                  delay(3000),
                  map(resp =>{
                    return (resp.length === 0) ? null :{emailTomado: true}                  
                  })
                );
  }
}
