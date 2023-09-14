import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalleMonedaComponent } from './detalle-moneda/detalle-moneda.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio-sesion', pathMatch: 'full' },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'registro-usuario', component: RegistroUsuarioComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detalle-moneda/:id', component: DetalleMonedaComponent },
  { path: 'editar-perfil', component: EditarPerfilComponent },
  { path: 'transaction-history', component: TransactionHistoryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
