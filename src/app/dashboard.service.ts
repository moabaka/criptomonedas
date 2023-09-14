import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private backendUrl = 'URL_DEL_BACKEND';

  constructor(private http: HttpClient) { }

  obtenerBalanceCriptomonedas(): Observable<any> {
    const url = `${this.backendUrl}/api/balance-criptomonedas`;
    return this.http.get(url);
  }

  ingresarDineroEnEuros(cantidad: number): Observable<any> {
    const url = `${this.backendUrl}/api/ingresar-dinero`;
    const data = { cantidad: cantidad };
    return this.http.post(url, data);
  }

  comprarCriptomoneda(criptomoneda: string, cantidadEuros: number): Observable<any> {
    const url = `${this.backendUrl}/api/comprar-criptomoneda`;
    const data = { criptomoneda, cantidadEuros };
    return this.http.post(url, data);
  }

  venderCriptomoneda(criptomoneda: string, cantidadCriptomonedas: number): Observable<any> {
    const url = `${this.backendUrl}/api/vender-criptomoneda`;
    const data = { criptomoneda, cantidadCriptomonedas };
    return this.http.post(url, data);
  }

  obtenerPrecioMercadoCriptomonedas(): Observable<any> {
    const url = `${this.backendUrl}/api/precio-mercado-criptomonedas`;
    return this.http.get(url);
  }
}
