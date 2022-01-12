import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompilationResponse } from '../to/CompilationResponse';
import { ParticipationChallenge } from '../to/ParticipationChallenge';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {

  constructor(
    private http: HttpClient,
  ) { }


  get(id : number) : Observable<ParticipationChallenge> {
    return this.http.get<ParticipationChallenge>(
      environment.server + '/participation/challenge/'+id
    );
  } 

  execute(id: number, code: string) : Observable<CompilationResponse> {
    return this.http.post<CompilationResponse>(environment.server + '/participation/challenge/'+id+'/execute', {code: code});
  }   
}
