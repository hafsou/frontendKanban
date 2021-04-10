import {KanbanBoard} from './kanbanboard.model';
import {Fiche} from './fiche.model';

export interface Utilisateur {
  nom: string;
  mail: string;
  kanbanBoards: KanbanBoard[];
  fiches: Fiche[];
}
