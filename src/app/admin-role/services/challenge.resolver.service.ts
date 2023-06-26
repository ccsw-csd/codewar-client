import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChallengeService } from './challenge.service';
import { ChallengeEdit } from '../models/ChallengeEdit';

@Injectable()
export class ChallengeResolverService implements Resolve<ChallengeEdit> {
  constructor(private http: HttpClient,
    private challengeService: ChallengeService,) { }

  /**
   * resolve method
   * @param route
   * @param state
   */
  resolve(route: ActivatedRouteSnapshot): Observable<ChallengeEdit> {
    const challengeId = route.params['id'];
    return this.challengeService.getChallengeById(challengeId);
  }

}