// src/app/cryptocurrency.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Criptomoneda } from './criptomonedas';

@Injectable({
  providedIn: 'root'
})
export class CryptocurrencyService {
  private baseUrl = 'https://api.coinmarketcap.com/v1/cryptocurrency';

  constructor(private http: HttpClient) {}

  getCryptocurrencies(): Observable<Criptomoneda[]> {
    const url = `${this.baseUrl}/listings/latest`;
    return this.http.get<Criptomoneda[]>(url);
  }

  getCryptocurrencyDetail(id: string): Observable<any> {
    const url = `${this.baseUrl}/info?id=${id}`;
    return this.http.get(url);
  }


}
