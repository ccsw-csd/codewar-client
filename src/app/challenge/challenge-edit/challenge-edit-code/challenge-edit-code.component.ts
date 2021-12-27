import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';
import { ChallengeService } from '../../services/challenge.service';
import { Challenge } from '../../to/Challenge';

@Component({
  selector: 'app-challenge-edit-code',
  templateUrl: './challenge-edit-code.component.html',
  styleUrls: ['./challenge-edit-code.component.scss']
})
export class ChallengeEditCodeComponent implements OnInit, OnDestroy {

  @Input() challenge: Challenge = new Challenge();
  editor: Editor;

  constructor(private challengeService: ChallengeService) { }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  generateCode() : string {

    if (this.challenge.className == null || this.challenge.functionName == null) return "Falta rellenar los campos obligatorios";

    let code = "public class "+this.challenge.className+" {\n";

    code += "\tpublic void "+this.challenge.functionName+"() {\n";
    code += "\n";
    code += "\t}";

    code += "\n";
    code += "}";

    return code;
  }

}
