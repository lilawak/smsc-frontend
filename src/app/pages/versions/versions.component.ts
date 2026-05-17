import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { VersionService } from '../../services/version.service';
import { SolutionService, Solution } from '../../services/solution.service';

@Component({
  selector: 'app-versions',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, ButtonModule,
    InputTextModule, DialogModule, DropdownModule],
  templateUrl: './versions.component.html',
  styleUrl: './versions.component.css'
})
export class VersionsComponent implements OnInit {

  versions: any[] = [];
  solutions: Solution[] = [];
  showDialog = false;
  editMode = false;
  selectedId: number | null = null;

  // ── Filter state ──────────────────────────────────────────────
  filterSolutionNom: string | null = null;   // nom of the selected solution
  filterEtat:        string | null = null;

  // Used by the solution filter dropdown — stores the whole Solution object
  // so we can extract .nom for the API call
  filterSolutionObj: Solution | null = null;

  form = {
    solutionId:         null as number | null,
    numeroVersion:      '',
    description:        '',
    etat:               'DEMO',
    dateReleasePrevue:  '',
    dateReleaseReelle:  ''
  };

  etats = [
    { label: 'Démo',             value: 'DEMO'    },
    { label: 'En développement', value: 'EN_DEV'  },
    { label: 'En test',          value: 'EN_TEST' },
    { label: 'Livré',            value: 'LIVRE'   },
    { label: 'Archivé',          value: 'ARCHIVE' },
  ];

  // Separate list for the filter dropdown — includes the virtual DERNIERE option.
  // We keep it out of `etats` so it never appears in the "create/edit" form.
  filterEtatOptions = [
    ...this.etats,
    { label: ' Dernière version', value: 'DERNIERE' },
  ];

  constructor(
    private versionService: VersionService,
    private solutionService: SolutionService
  ) {}

  ngOnInit() {
    this.load();
    this.solutionService.getAll().subscribe((d: Solution[]) => this.solutions = d);
  }

  // ── Load with optional filters ────────────────────────────────
  load() {
    const solutionNom = this.filterSolutionObj?.nom ?? null;
    const etat        = this.filterEtat;

    this.versionService.getAll(solutionNom, etat)
      .subscribe((data: any[]) => this.versions = data);
  }

  resetFilters() {
    this.filterSolutionObj = null;
    this.filterEtat        = null;
    this.load();
  }

  // ── CRUD ──────────────────────────────────────────────────────
  openNew() {
    this.form = {
      solutionId: null, numeroVersion: '', description: '',
      etat: 'DEMO', dateReleasePrevue: '', dateReleaseReelle: ''
    };
    this.editMode = false;
    this.selectedId = null;
    this.showDialog = true;
  }

  openEdit(v: any) {
    this.form = {
      solutionId:        v.solution?.idSolution ?? null,
      numeroVersion:     v.numeroVersion,
      description:       v.description ?? '',
      etat:              v.etat,
      dateReleasePrevue: v.dateReleasePrevue ?? '',
      dateReleaseReelle: v.dateReleaseReelle ?? ''
    };
    this.editMode = true;
    this.selectedId = v.idVersion;
    this.showDialog = true;
  }

  save() {
    if (!this.form.solutionId) {
      alert('Veuillez choisir une solution');
      return;
    }
    if (!this.form.numeroVersion.trim()) {
      alert('Veuillez saisir un numéro de version');
      return;
    }
    if (!this.form.dateReleasePrevue) {
      alert('Veuillez saisir une date de release prévue');
      return;
    }

    const payload = {
      solution:          { idSolution: this.form.solutionId },
      numeroVersion:     this.form.numeroVersion,
      description:       this.form.description || null,
      etat:              this.form.etat,
      dateReleasePrevue: this.form.dateReleasePrevue,
      dateReleaseReelle: this.form.dateReleaseReelle || null
    };

    if (this.editMode && this.selectedId) {
      this.versionService.update(this.selectedId, payload as any).subscribe({
        next: () => { this.load(); this.showDialog = false; },
        error: (err) => {
          console.error('Erreur:', err);
          alert('Erreur : ' + (err.error?.message || err.message));
        }
      });
    } else {
      this.versionService.create(payload as any).subscribe({
        next: () => { this.load(); this.showDialog = false; },
        error: (err) => {
          console.error('Erreur:', err);
          alert('Erreur : ' + (err.error?.message || err.message));
        }
      });
    }
  }

  delete(id: number) {
    if (confirm('Supprimer cette version ?')) {
      this.versionService.delete(id).subscribe(() => this.load());
    }
  }

  getEtatLabel(value: string): string {
    return this.etats.find(e => e.value === value)?.label || value;
  }

  // Returns extra CSS classes for the row's badge cell.
  // A "dernière version" row shows its normal état badge PLUS a star badge.
  isDerniereVersion(v: any): boolean {
    return v.derniereVersion === true;
  }
}
