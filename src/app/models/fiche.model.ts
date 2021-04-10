import {Utilisateur} from './utilisateur.model';
import {Section} from './section.model';

export interface Fiche {
  id: number;
  position: number;
  libelle: string;
  date: string;
  requiredTime: number;
  tags: string;
  lieu: string;
  url: string;
  note: string;
  utilisateur: Utilisateur;
  section: Section;
}
