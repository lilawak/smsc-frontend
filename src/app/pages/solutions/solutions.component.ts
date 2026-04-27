import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { SolutionService, Solution } from '../../services/solution.service';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, ButtonModule, InputTextModule, DialogModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent implements OnInit {
  solutions: Solution[] = [];
  showDialog = false;
  editMode = false;
  selectedId: number | null = null;
  form: Solution = { nom: '' };

  constructor(private solutionService: SolutionService) {}

  ngOnInit() { this.load(); }

  load() {
    this.solutionService.getAll().subscribe((data: Solution[]) => this.solutions = data);
  }

  openNew() {
    this.form = { nom: '' };
    this.editMode = false;
    this.showDialog = true;
  }

  openEdit(s: Solution) {
    this.form = { ...s };
    this.editMode = true;
    this.selectedId = s.idSolution!;
    this.showDialog = true;
  }

  save() {
    if (this.editMode && this.selectedId) {
      this.solutionService.update(this.selectedId, this.form).subscribe(() => {
        this.load(); this.showDialog = false;
      });
    } else {
      this.solutionService.create(this.form).subscribe(() => {
        this.load(); this.showDialog = false;
      });
    }
  }

  delete(id: number) {
    if (confirm('Supprimer cette solution ?')) {
      this.solutionService.delete(id).subscribe(() => this.load());
    }
  }
}
