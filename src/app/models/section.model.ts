import {Fiche} from './fiche.model';
import {KanbanBoard} from './kanbanboard.model';

export interface Section {
  id: number;
  nom: string;
  fiches: Fiche[];
  kanbanBoard: KanbanBoard[];
}
