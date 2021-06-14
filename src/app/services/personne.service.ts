import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adresse } from '../interfaces/adresse';
import { Personne } from '../interfaces/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private url = 'http://localhost:3000/utilisateur/';

  constructor(private http: HttpClient) { }
  
  getAllPersonnes() {
    return this.http.get<Array<Personne>>(this.url);
  }
  addPersonne(p: Personne) {
    return this.http.post<Personne>(this.url, p);
  }
  deletePersonne(num: number) {
    return this.http.delete(this.url+num);
  }
  getOneById(num: number) {
    return this.http.get<Personne>(this.url + num);
  }
  editPersonne(p: Personne) {
    return this.http.put<Personne>(this.url+p.id, p);
  }

  getBillingAdresse(idUtilisateur : number, idType: any) {
    console.log(typeof(idType))
    return this.http.get<Adresse>(this.url+"commande/adresse/"+ idUtilisateur, idType );
  }
}