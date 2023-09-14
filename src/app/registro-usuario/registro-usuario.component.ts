// registro-usuario.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  registroForm!: FormGroup;
  paises: any[] = [];

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private http: HttpClient,
    private router: Router
  ) {}

  static validateDateNotInPast(control: FormControl) {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      return { dateInPast: true };
    }
    return null;
  }

  ngOnInit() {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      contrasena: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/[A-Z]/),
          Validators.pattern(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/)
        ]
      ],
      email: ['', [Validators.required, Validators.email]],
      pais: [''],
      ciudad: ['', Validators.required],
      direccion: ['', Validators.required],
      tipoCuenta: ['tarjeta'],
      numeroTarjeta: [
        '',
        [Validators.required, Validators.minLength(16), Validators.maxLength(16)]
      ],
      iban: [
        '',
        [Validators.required, Validators.pattern(/^[A-Z]{2}\d{22}$/)]
      ],
      fechaCaducidad: [
        '',
        [Validators.required, RegistroUsuarioComponent.validateDateNotInPast]
      ],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    });

    this.http.get<any[]>('https://restcountries.com/v3.1/all').subscribe(countries => {
      this.paises = countries;
    });
  }

  registrarUsuario() {
    if (this.registroForm.valid) {
      const usuarioData = this.registroForm.value;
      console.log(usuarioData);
      this.usuarioService.registrarUsuario(usuarioData).subscribe(
        (response: any) => {
          console.log('Usuario registrado exitosamente', response);
          this.router.navigate(['/inicio-sesion']);
        },
        (error: any) => {
          console.error('Error al registrar el usuario', error);
        }
      );
    }
  }

  onSubmit() {
    this.registrarUsuario();
  }
}
