import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { VersionsComponent } from './pages/versions/versions.component';
import { PlanificationsComponent } from './pages/planifications/planifications.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import {NavbarComponent} from './layout/navbar/navbar.component';

export const routes: Routes = [
  { path: 'login',           component: LoginComponent },
  { path: '',                redirectTo: 'login', pathMatch: 'full' },
  {path: 'navbar',           component:  NavbarComponent ,        canActivate: [authGuard] },
  { path: 'dashboard',       component: DashboardComponent,       canActivate: [authGuard] },
  { path: 'clients',         component: ClientsComponent,         canActivate: [authGuard] },
  { path: 'solutions',       component: SolutionsComponent,       canActivate: [authGuard] },
  { path: 'versions',        component: VersionsComponent,        canActivate: [authGuard] },
  { path: 'planifications',  component: PlanificationsComponent,  canActivate: [authGuard] },
  {path: '**',               redirectTo: 'login', },
];
