import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client.service';
import { SolutionService } from '../../services/solution.service';
import { VersionService } from '../../services/version.service';
import { PlanificationService } from '../../services/planification.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  totalClients = 0;
  totalSolutions = 0;
  totalVersions = 0;
  totalPlanifications = 0;

  constructor(
    private clientService: ClientService,
    private solutionService: SolutionService,
    private versionService: VersionService,
    private planificationService: PlanificationService
  ) {}

  ngOnInit() {
    this.clientService.getAll().subscribe((d: any[]) => this.totalClients = d.length);
    this.solutionService.getAll().subscribe((d: any[]) => this.totalSolutions = d.length);
    this.versionService.getAll().subscribe((d: any[]) => this.totalVersions = d.length);
    this.planificationService.getAll().subscribe((d: any[]) => this.totalPlanifications = d.length);
  }
}
