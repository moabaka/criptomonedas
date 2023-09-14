import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AutenticacionService } from '../autenticacion.service';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  inicioSesionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private autenticacionService: AutenticacionService,
    private usuarioService: UsuarioService
  ) {
    this.inicioSesionForm = this.fb.group({
      email: [''],
      contraseña: [''],
    });
  }

  ngOnInit() {
  }

  iniciarSesion() {

    const userId = 1;
    this.usuarioService.setUserId(userId);
  }
}
