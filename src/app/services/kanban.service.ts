import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { KanbanBoard } from '../models/kanbanboard.model';

const urlKanban = 'http://localhost:8080/kanban/';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  constructor(private http: HttpClient) { }

  getKanbansByEmail(email: String): Observable<KanbanBoard[]> {
    return this.http.get<KanbanBoard[]>(urlKanban + `mail?mail=${email}`);
  }
}