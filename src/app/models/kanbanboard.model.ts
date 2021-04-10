import {Section} from './section.model';
import {Utilisateur} from './utilisateur.model';

export interface KanbanBoard {
  id: number;
  nom: string;
  sections: Section[];
  utilisateurs: Utilisateur[];
}
