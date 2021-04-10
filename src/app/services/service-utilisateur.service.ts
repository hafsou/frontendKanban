import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Utilisateur} from '../models/utilisateur.model';
import {Observable} from 'rxjs';
import { catchError, map } from 'rxjs/operators';


const urlUtilisateur = '/utilisateur/';

@Injectable({
  providedIn: 'root'
})
export class ServiceUtilisateurService {

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>( '/api/utilisateur/allUsers');
  }

  addUser(utilisateur:Utilisateur): Observable<Utilisateur> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(utilisateur);
 
    return this.http.post<Utilisateur>('/api/utilisateur/addUser', body,{'headers':headers})
       .pipe(
          map((data) => {
           return data;
         }),
         catchError((err) => {
           console.error(err);
           throw err;
         }
       )
       )
  }

    deleteUser(email: String): Observable<Utilisateur> {
    return this.http.delete<Utilisateur>('/api/utilisateur/deleteUser/' + `email?email=${email}`);
  }
}
