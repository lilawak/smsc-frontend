import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Version {
  idVersion?: number;
  solution?: any;
  numeroVersion: string;
  description?: string;
  dateReleasePrevue: string;
  dateReleaseReelle?: string;
  etat: string;
}

@Injectable({ providedIn: 'root' })
export class VersionService {
  private api = 'https://smsc-backend-production.up.railway.app/api/versions';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Version[]> { return this.http.get<Version[]>(this.api); }
  getById(id: number): Observable<Version> { return this.http.get<Version>(`${this.api}/${id}`); }
  create(v: Version): Observable<Version> { return this.http.post<Version>(this.api, v); }
  update(id: number, v: Version): Observable<Version> { return this.http.put<Version>(`${this.api}/${id}`, v); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.api}/${id}`); }
}
