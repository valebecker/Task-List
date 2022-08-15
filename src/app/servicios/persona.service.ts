import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Persona } from '../model/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiUrl = 'http://localhost:8080/'; //HAY QUE AGREGAR LA / AL FINAL

  constructor(private http: HttpClient) {
   }

  getPersona(): Observable<Persona> {
    return this.http.get<Persona>(this.apiUrl + "ver/perfil");
  }
}
