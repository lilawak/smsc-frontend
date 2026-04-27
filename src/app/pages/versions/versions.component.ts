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

  constructor(
    private versionService: VersionService,
    private solutionService: SolutionService
  ) {}

  ngOnInit() {
    this.load();
    this.solutionService.getAll().subscribe((d: Solution[]) => this.solutions = d);
  }

  load() {
    this.versionService.getAll().subscribe((data: any[]) => this.versions = data);
  }

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
    // Validation
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

    // Payload propre — exactement ce que Spring Boot attend
    const payload = {
      solution:          { idSolution: this.form.solutionId },
      numeroVersion:     this.form.numeroVersion,
      description:       this.form.description || null,
      etat:              this.form.etat,
      dateReleasePrevue: this.form.dateReleasePrevue,
      dateReleaseReelle: this.form.dateReleaseReelle || null
    };

    console.log('Payload envoyé :', JSON.stringify(payload));

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
}
