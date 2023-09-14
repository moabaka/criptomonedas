
import { Component, OnInit } from '@angular/core';
import { CryptocurrencyService } from '../cryptocurrency.service';
import { Criptomoneda } from '../criptomonedas';

@Component({
  selector: 'app-cryptocurrency-list',
  templateUrl: './cryptocurrency-list.component.html',
  styleUrls: ['./cryptocurrency-list.component.css']
})
export class CryptocurrencyListComponent implements OnInit {
  criptomonedas: Criptomoneda[] = [];

  constructor(private cryptocurrencyService: CryptocurrencyService) { }

  ngOnInit() {
    this.cryptocurrencyService.getCryptocurrencies().subscribe((data: Criptomoneda[]) => {
      this.criptomonedas = data;
    });
  }

  verDetalle(cryptocurrency: any) {

  }
}
