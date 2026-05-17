import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client.service';
import { SolutionService } from '../../services/solution.service';
import { VersionService } from '../../services/version.service';
import { PlanificationService } from '../../services/planification.service';
import { forkJoin } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  totalClients       = 0;
  totalSolutions     = 0;
  totalVersions      = 0;
  totalPlanifications = 0;

  // Number of planifications linked to a dernière version
  clientsAvecDerniereVersion = 0;

  // Number of planifications linked to an older version
  // Both counts always sum to totalPlanifications
  clientsAvecAncienneVersion = 0;

  constructor(
    private clientService: ClientService,
    private solutionService: SolutionService,
    private versionService: VersionService,
    private planificationService: PlanificationService
  ) {}

  ngOnInit() {
    this.clientService.getAll()
      .subscribe((d: any[]) => this.totalClients = d.length);

    this.solutionService.getAll()
      .subscribe((d: any[]) => this.totalSolutions = d.length);

    this.versionService.getAll()
      .subscribe((d: any[]) => this.totalVersions = d.length);

    // Fetch ALL planifications (no day filter) so counts are always global.
    // The backend already tags derniereVersion on every nested version object.
    this.planificationService.getAll().subscribe((planifications: any[]) => {
      this.totalPlanifications = planifications.length;
      this.computeClientCounts(planifications);
    });
  }

  private computeClientCounts(planifications: any[]): void {
    this.clientsAvecDerniereVersion = planifications
      .filter(p => p.version?.derniereVersion === true).length;

    this.clientsAvecAncienneVersion = planifications
      .filter(p => p.version?.derniereVersion !== true).length;
  }
}
