import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Challenge } from 'src/app/admin-role/models/Challenge';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Tag } from 'src/app/core/models/Tag';
import { ChallengeEdit } from 'src/app/admin-role/models/ChallengeEdit';
import { ParameterType } from 'src/app/core/models/ParameterType';


@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(
    private http: HttpClient
  ) { }

  getChallenges(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(environment.server + '/challenge');
  }

  getChallengeById(id: number): Observable<ChallengeEdit> {
    return this.http.get<ChallengeEdit>(environment.server + '/challenge/' + id);
  }

  getAllTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>(environment.server + '/tag');
  }

  getParameterTypes(): Observable<ParameterType[]>{
    return this.http.get<ParameterType[]>(environment.server + '/parameter_type');
  }

}