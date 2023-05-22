import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Challenge } from 'src/app/core/models/Challenge';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(
    private http: HttpClient
  ) { }

  getChallenges(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>('http://localhost:8080/challenge');
  }
}