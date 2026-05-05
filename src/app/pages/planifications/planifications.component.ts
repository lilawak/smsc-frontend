import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { PlanificationService } from '../../services/planification.service';
import { ClientService, Client } from '../../services/client.service';
import { VersionService, Version } from '../../services/version.service';

@Component({
  selector: 'app-planifications',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, ButtonModule,
    InputTextModule,InputNumberModule, DialogModule, DropdownModule],
  templateUrl: './planifications.component.html',
  styleUrl: './planifications.component.css'
})
export class PlanificationsComponent implements OnInit {
  planifications: any[] = [];
  clients: Client[] = [];
  versions: Version[] = [];
  showDialog = false;
  editMode = false;
  selectedId: number | null = null;
  daysInput: number | null = 30;


  form = {
    titre:               '',
    clientId:            null as number | null,
    versionId:           null as number | null,
    dateCommande:        '',
    dateLivraisonPrevue: '',
    dateLivraisonReelle: ''
  };

  constructor(
    private planificationService: PlanificationService,
    private clientService: ClientService,
    private versionService: VersionService
  ) {}

  ngOnInit() {
    this.load();
    this.clientService.getAll().subscribe((d: Client[]) => this.clients = d);
    this.versionService.getAll().subscribe((d: any[]) => this.versions = d);
  }



  load() {
    this.planificationService.getAll(this.daysInput ?? undefined)
      .subscribe((data: any[]) => this.planifications = data);
  }

  openNew() {
    this.form = {
      titre: '', clientId: null, versionId: null,
      dateCommande: '', dateLivraisonPrevue: '', dateLivraisonReelle: ''
    };
    this.editMode = false;
    this.selectedId = null;
    this.showDialog = true;
  }

  openEdit(p: any) {
    this.form = {
      titre:               p.titre,
      clientId:            p.client?.idClient ?? null,
      versionId:           p.version?.idVersion ?? null,
      dateCommande:        p.dateCommande ?? '',
      dateLivraisonPrevue: p.dateLivraisonPrevue ?? '',
      dateLivraisonReelle: p.dateLivraisonReelle ?? ''
    };
    this.editMode = true;
    this.selectedId = p.idPlanification;
    this.showDialog = true;
  }

  save() {
    // Validation
    if (!this.form.titre.trim()) {
      alert('Veuillez saisir un titre');
      return;
    }
    if (!this.form.clientId) {
      alert('Veuillez choisir un client');
      return;
    }
    if (!this.form.versionId) {
      alert('Veuillez choisir une version');
      return;
    }

    // Payload propre — SANS clientId et versionId
    const payload = {
      titre:               this.form.titre,
      client:              { idClient:  this.form.clientId  },
      version:             { idVersion: this.form.versionId },
      dateCommande:        this.form.dateCommande        || null,
      dateLivraisonPrevue: this.form.dateLivraisonPrevue || null,
      dateLivraisonReelle: this.form.dateLivraisonReelle || null
    };

    console.log('Payload envoyé :', JSON.stringify(payload));

    if (this.editMode && this.selectedId) {
      this.planificationService.update(this.selectedId, payload as any).subscribe({
        next: () => { this.load(); this.showDialog = false; },
        error: (err) => {
          console.error('Erreur:', err);
          alert('Erreur : ' + (err.error?.message || JSON.stringify(err.error)));
        }
      });
    } else {
      this.planificationService.create(payload as any).subscribe({
        next: () => { this.load(); this.showDialog = false; },
        error: (err) => {
          console.error('Erreur:', err);
          alert('Erreur : ' + (err.error?.message || JSON.stringify(err.error)));
        }
      });
    }
  }

  delete(id: number) {
    if (confirm('Supprimer cette planification ?')) {
      this.planificationService.delete(id).subscribe(() => this.load());
    }
  }
}
