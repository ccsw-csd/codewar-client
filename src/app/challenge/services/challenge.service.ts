import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Challenge } from '../to/Challenge';
import { Tag } from '../to/Tag';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(
    private http: HttpClient,
  ) { }


  findMyChallenges(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(
      environment.server + '/challenge/'
    );
  }

  get(id : number): Observable<Challenge> {
    return this.http.get<Challenge>(
      environment.server + '/challenge/'+id+'/'
    );
  }  
  
  findTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(
      environment.server + '/challenge/tags'
    );
  }  

}
