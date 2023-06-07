import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Challenge } from 'src/app/core/models/Challenge';
import { ChallengeEdit } from 'src/app/core/models/ChallengeEdit';
import { ChallengeService } from '../../services/challenge.service';
import { ParameterType } from 'src/app/core/models/ParameterType';
import { ChallengeParameter } from 'src/app/core/models/ChallengeParameter';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit{

  listParameters: ParameterType[] = [];
  parameters: ChallengeParameter[] = [];

  @Input() challenge: Challenge;
  @Input() challengeEdit: ChallengeEdit;

  constructor(private challengeService: ChallengeService) { }

  ngOnInit(): void {
    this.getParameterTypes();
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
    
  deleteParameter(parameter: ChallengeParameter) {
    this.parameters = this.parameters.filter(p => p !== parameter);
  }
  
  addParameter() {
    const newParameter: ChallengeParameter = {
      id: this.parameters.length + 1,
      name: '',
      parameterTypeId: 0,
      order: this.parameters.length + 1,
      isInput: true
    };
    this.parameters.push(newParameter);
  }
  
}
