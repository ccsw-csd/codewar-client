import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChallengeParticipationItemList } from '../to/ChallengeParticipationItemList';
import { CompilationResponse } from '../to/CompilationResponse';
import { ChallengeParticipation } from '../to/ChallengeParticipation';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {

  constructor(
    private http: HttpClient,
  ) { }

  findActiveChallenges(): Observable<ChallengeParticipationItemList[]> {

    return this.http.get<ChallengeParticipationItemList[]>(environment.server + '/challenge/active/');
  }

  get(id : number) : Observable<ChallengeParticipation> {
    return this.http.get<ChallengeParticipation>(environment.server + '/participation/challenge/'+id+'/');
  } 

  execute(id: number, code: string) : Observable<CompilationResponse> {
    return this.http.post<CompilationResponse>(environment.server + '/participation/challenge/'+id+'/execute/', {code: code});
  }    
}
