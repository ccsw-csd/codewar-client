import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChallengeCheckResult } from '../to/ChallengeCheckResult';
import { ChallengeEdit } from '../to/ChallengeEdit';
import { ChallengeItemList } from '../to/ChallengeItemList';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(
    private http: HttpClient,
  ) { }


  findMyChallenges(): Observable<ChallengeItemList[]> {
    return this.http.get<ChallengeItemList[]>(
      environment.server + '/challenge/'
    );
  }

  get(id : number): Observable<ChallengeEdit> {
    return this.http.get<ChallengeEdit>(
      environment.server + '/challenge/'+id+'/'
    );
  }   

  save(challengeId : number, challenge : ChallengeEdit): any {

    let url : string = environment.server + '/challenge/';
    if (challengeId != null) url += challengeId+"/";

    return this.http.post<any>(url, challenge);

  }

  delete(challengeId: number): Observable<void> {
    return this.http.delete<any>(environment.server + '/challenge/'+challengeId+'/');      
  }

  check(challengeId: number): Observable<ChallengeCheckResult> {
    return this.http.get<ChallengeCheckResult>(environment.server + '/challenge/'+challengeId+'/check/');      
  }

  activate(challengeId: number): Observable<ChallengeCheckResult> {
    return this.http.post<ChallengeCheckResult>(environment.server + '/challenge/'+challengeId+'/activate/', {});      
  }

  finalize(challengeId: number): Observable<void> {
    return this.http.post<void>(environment.server + '/challenge/'+challengeId+'/finalize/', {});      
  }
  
  

}
