import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalleMonedaComponent } from './detalle-moneda/detalle-moneda.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { CryptocurrencyListComponent } from './cryptocurrency-list/cryptocurrency-list.component';

import { UsuarioService } from './usuario.service';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    RegistroUsuarioComponent,
    DashboardComponent,
    DetalleMonedaComponent,
    EditarPerfilComponent,
    CryptocurrencyListComponent,
    TransactionHistoryComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    RouterModule,
    NgChartsModule,
    MenubarModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
