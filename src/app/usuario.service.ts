// usuario.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private backendUrl = 'http://localhost:8081/api';
  private userId: number | null = null;

  constructor(private http: HttpClient) {}

  getUserId(): number | null {
    return this.userId;
  }

  setUserId(userId: number | null): void {
    this.userId = userId;
  }

  registrarUsuario(usuarioData: any) {
    const url = `${this.backendUrl}/usuarios`;
    return this.http.post(url, usuarioData);
  }


  actualizarInformacionUsuario(userId: string, datosUsuario: any): Observable<any> {
    const url = `${this.backendUrl}/usuarios/${userId}`;
    return this.http.put(url, datosUsuario);
  }
}
