import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/core/to/Tag';
import { environment } from 'src/environments/environment';
import { ParameterType } from '../to/ParameterType';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(
    private http: HttpClient,
  ) { }


  findTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(
      environment.server + '/tags'
    );
  }  

  findParameterTypes(): Observable<ParameterType[]> {
    return this.http.get<ParameterType[]>(
      environment.server + '/parameter-types'
    );
  }    

}
