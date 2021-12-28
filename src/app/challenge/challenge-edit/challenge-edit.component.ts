import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChallengeService } from '../services/challenge.service';
import { Challenge } from '../to/Challenge';
import { Parameter } from '../to/Parameter';
import { Test } from '../to/Test';
import { TestValue } from '../to/TestValue';

@Component({
  selector: 'app-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.scss']
})
export class ChallengeEditComponent implements OnInit {

  challenge : Challenge;

  constructor(private route: ActivatedRoute, 
      private challengeService : ChallengeService) { 

    this.challenge = new Challenge();
    this.challenge.outParameter = {name:'out', type: 'String'};
    this.challenge.inParameter = [{name:null, type: null}];


  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      if (params != null && params['id'] != null) {
        let id : number = +params['id']; 
          
        if (id != null) {
          this.challengeService.get(id).subscribe((data) => {
            this.challenge = data;
          });
        }      
      }
   });
   

   

   /*
   this.challenge.name = "Suma números enteros";
   this.challenge.description = "Dados dos números enteros, realiza la suma y devuelve el resultado";
   this.challenge.className = "MatematicasLocas";
   this.challenge.functionName = "sumaNumeros";

   this.challenge.outParameter = {name:'', type: 'Long'};
   this.challenge.inParameter = [{name:'a', type: 'Long'}, {name:'b', type: 'Long'}];

   this.challenge.test = [];
   this.challenge.test.push(new Test('Suma 2+3', [new TestValue('2', this.challenge.inParameter[0]), new TestValue('3', this.challenge.inParameter[1])], new TestValue('5', this.challenge.outParameter), true, 600));
   this.challenge.test.push(new Test('Suma -2-3', [new TestValue('-2', this.challenge.inParameter[0]), new TestValue('-3', this.challenge.inParameter[1])], new TestValue('-5', this.challenge.outParameter), false));


   this.challenge.test.push(new Test('Suma 0+0', [new TestValue('0', this.challenge.inParameter[0]), new TestValue('0', this.challenge.inParameter[1])], new TestValue('0', this.challenge.outParameter), false));
   this.challenge.test.push(new Test('Suma 0+0', [new TestValue('0', this.challenge.inParameter[0]), new TestValue('0', this.challenge.inParameter[1])], new TestValue('0', this.challenge.outParameter), false));
   this.challenge.test.push(new Test('Suma 0+0', [new TestValue('0', this.challenge.inParameter[0]), new TestValue('0', this.challenge.inParameter[1])], new TestValue('0', this.challenge.outParameter), false));
   this.challenge.test.push(new Test('Suma 0+0', [new TestValue('0', this.challenge.inParameter[0]), new TestValue('0', this.challenge.inParameter[1])], new TestValue('0', this.challenge.outParameter), false));
   this.challenge.test.push(new Test('Suma 0+0', [new TestValue('0', this.challenge.inParameter[0]), new TestValue('0', this.challenge.inParameter[1])], new TestValue('0', this.challenge.outParameter), false));
   this.challenge.test.push(new Test('Suma 0+0', [new TestValue('0', this.challenge.inParameter[0]), new TestValue('0', this.challenge.inParameter[1])], new TestValue('0', this.challenge.outParameter), false));
   this.challenge.test.push(new Test('Suma 0+0', [new TestValue('0', this.challenge.inParameter[0]), new TestValue('0', this.challenge.inParameter[1])], new TestValue('0', this.challenge.outParameter), false));
   this.challenge.test.push(new Test('Suma 0+0', [new TestValue('0', this.challenge.inParameter[0]), new TestValue('0', this.challenge.inParameter[1])], new TestValue('0', this.challenge.outParameter), false));
   */
  }

}
