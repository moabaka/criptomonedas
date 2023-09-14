import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptocurrencyService } from '../cryptocurrency.service';

@Component({
  selector: 'app-detalle-moneda',
  templateUrl: './detalle-moneda.component.html',
  styleUrls: ['./detalle-moneda.component.css']
})
export class DetalleMonedaComponent implements OnInit {
  selectedCryptocurrency: any;
  chartData: any[] = [];
  chartLabels: any[] = [];
  chartOptions: any = {};
  chartColors: any[] = [
    {
      borderColor: 'rgba(255,0,0,0.3)',
      backgroundColor: 'rgba(255,0,0,0.1)',
      pointBackgroundColor: 'rgba(255,0,0,0.5)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,0,0,0.8)'
    }
  ];
  legend: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private cryptocurrencyService: CryptocurrencyService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const cryptocurrencyId = params.get('id');
      if (cryptocurrencyId) {
        this.cryptocurrencyService.getCryptocurrencyDetail(cryptocurrencyId).subscribe(data => {
          this.selectedCryptocurrency = data;


          this.chartData = [
            { data: [10, 15, 20, 25, 30], label: 'Price History' }
          ];
          this.chartLabels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];

          this.chartOptions = {
            responsive: true,
            scales: {
              xAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          };
        });
      }
    });
  }

  comprar() {
    // Lógica para comprar criptomoneda
    if (this.selectedCryptocurrency) {
      // Realiza la lógica de compra aquí
      console.log('Comprando', this.selectedCryptocurrency.name);
    }
  }

  vender() {
    // Lógica para vender criptomoneda
    if (this.selectedCryptocurrency) {
      // Realiza la lógica de venta aquí
      console.log('Vendiendo', this.selectedCryptocurrency.name);
    }
  }
}
