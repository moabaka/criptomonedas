import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  usuario: any = {};
  userId!: string ;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id !== null) {
        this.userId = id; // Asignamos el valor solo si no es nulo
      }
    });
  }

  guardarCambios() {

    this.usuarioService.actualizarInformacionUsuario(this.userId, this.usuario).subscribe(() => {

      this.router.navigate(['/dashboard']);
    });
  }

  volverAlDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
