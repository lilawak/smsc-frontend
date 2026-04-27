import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { VersionsComponent } from './pages/versions/versions.component';
import { PlanificationsComponent } from './pages/planifications/planifications.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'versions', component: VersionsComponent },
  { path: 'planifications', component: PlanificationsComponent },
];
