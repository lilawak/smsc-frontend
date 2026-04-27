import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ClientService, Client } from '../../services/client.service';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, ButtonModule, InputTextModule, DialogModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];
  showDialog = false;
  editMode = false;
  selectedId: number | null = null;
  form: Client = { nom: '', email: '' };

  constructor(private clientService: ClientService) {}

  ngOnInit() { this.load(); }

  load() {
    this.clientService.getAll().subscribe((data: Client[]) => this.clients = data);
  }

  openNew() {
    this.form = { nom: '', email: '' };
    this.editMode = false;
    this.selectedId = null;
    this.showDialog = true;
  }

  openEdit(c: Client) {
    this.form = { ...c };
    this.editMode = true;
    this.selectedId = c.idClient!;
    this.showDialog = true;
  }

  save() {
    if (this.editMode && this.selectedId) {
      this.clientService.update(this.selectedId, this.form).subscribe(() => {
        this.load(); this.showDialog = false;
      });
    } else {
      this.clientService.create(this.form).subscribe(() => {
        this.load(); this.showDialog = false;
      });
    }
  }

  delete(id: number) {
    if (confirm('Supprimer ce client ?')) {
      this.clientService.delete(id).subscribe(() => this.load());
    }
  }
}
