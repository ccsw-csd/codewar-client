import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChallengeParticipationItemListComponent } from '../challenge-participation-list/challenge-participation-item-list/challenge-participation-item-list.component';
import { ChallengeParticipationItemList } from '../to/ChallengeParticipationItemList';

@Injectable({
  providedIn: 'root'
})
export class ChallengeParticipationService {

  constructor(
    private http: HttpClient,
  ) { }

  findActiveChallenges(): Observable<ChallengeParticipationItemList[]> {

    return this.http.get<ChallengeParticipationItemList[]>(
      environment.server + '/challenge/active'
    );
  }
}
