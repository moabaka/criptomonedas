import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptocurrencyService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getCryptocurrencyDetail(id: string): Observable<any> {
    const url = `${this.baseUrl}/info?id=${id}`;
    return this.http.get(url);
  }


}
