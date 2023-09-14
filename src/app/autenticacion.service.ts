import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  constructor(private http: HttpClient) {}

  iniciarSesion(credenciales: any): Observable<any> {

    return this.http.post('/api/login', credenciales);
  }
}
