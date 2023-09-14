import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { BalanceCriptomonedas, PrecioMercadoCriptomonedas } from '../dashboard.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  balanceCriptomonedas: BalanceCriptomonedas = {
    euro: 0,
    btc: 0,
    eth: 0,
    usdt: 0,
    bnb: 0
  };
  precioMercadoCriptomonedas: PrecioMercadoCriptomonedas = {
    btc: 0,
    eth: 0,
    usdt: 0,
    bnb: 0
  };
  cantidad: number = 0;
  userId: number | null = null;

  constructor(
    private dashboardService: DashboardService,
    private usuarioService: UsuarioService
  ) { this.userId = usuarioService.getUserId();}

  ngOnInit() {
    this.obtenerBalanceCriptomonedas();
    this.obtenerPrecioMercadoCriptomonedas();
    this.userId = this.usuarioService.getUserId();
  }

  obtenerBalanceCriptomonedas() {
    this.dashboardService.obtenerBalanceCriptomonedas().subscribe((response: BalanceCriptomonedas) => {
      this.balanceCriptomonedas = response;
    });
  }

  obtenerPrecioMercadoCriptomonedas() {
    this.dashboardService.obtenerPrecioMercadoCriptomonedas().subscribe((response: PrecioMercadoCriptomonedas) => {
      this.precioMercadoCriptomonedas = response;
    });
  }

  ingresarDineroEnEuros() {
    this.dashboardService.ingresarDineroEnEuros(this.cantidad).subscribe(() => {
      this.obtenerBalanceCriptomonedas();
    });
  }
}
