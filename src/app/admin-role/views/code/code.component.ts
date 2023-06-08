import { Component, Input, OnInit } from '@angular/core';
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
    this.parameters = this.challengeEdit?.challengeParameter ?? [];
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
      order: this.challengeEdit.challengeParameter.length + 1,
      isInput: true,
    };
    this.challengeEdit.challengeParameter.push(newParameter);
  }

  deleteParameter(parameter: ChallengeParameter) {
    if (this.challengeEdit.challengeParameter.length === 1) {
      return;
    }

    const index = this.challengeEdit.challengeParameter.indexOf(parameter);
    if (index > -1) {
      this.challengeEdit.challengeParameter.splice(index, 1);
    }
  }
 
  
}
