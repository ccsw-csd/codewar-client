import { Component, Input, OnInit } from '@angular/core';
import { Challenge } from 'src/app/admin-role/models/Challenge';
import { ChallengeEdit } from 'src/app/admin-role/models/ChallengeEdit';
import { ChallengeService } from '../../../services/challenge.service';
import { ParameterType } from 'src/app/core/models/ParameterType';
import { ChallengeParameter } from 'src/app/admin-role/models/ChallengeParameter';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit{

  listParameters: ParameterType[] = [];
  parameters: ChallengeParameter[] = [];

  @Input() challenge: ChallengeEdit;

  constructor(private challengeService: ChallengeService) { }

  ngOnInit(): void {
    this.getParameterTypes();
    this.parameters = this.challenge?.challengeParameters ?? [];
  }

  getParameterTypes() {
    this.challengeService.getParameterTypes().subscribe({
      next: data => {
        this.listParameters = data;
      },
      error: () => {},
      complete: () => {}
    });
  }
    
  addParameter() {
    const newParameter: ChallengeParameter = {
      id: 0,
      name: "",
      parameterType: null,
      order: this.challenge.challengeParameters.length + 1,
      isInput: true,
    };
    this.challenge.challengeParameters.push(newParameter);
  }

  deleteParameter(parameter: ChallengeParameter) {
    if (this.challenge.challengeParameters.length === 1) {
      return;
    }

    const index = this.challenge.challengeParameters.indexOf(parameter);
    if (index > -1) {
      this.challenge.challengeParameters.splice(index, 1);
    }
  }
 
  
}
