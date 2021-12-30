import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChallengeService } from '../../services/challenge.service';
import { ChallengeEdit } from '../../to/ChallengeEdit';

import * as ace from "ace-builds";
import { Parameter } from '../../to/Parameter';
import { ParameterType } from 'src/app/core/to/ParameterType';
import { MasterService } from 'src/app/core/services/master.service';

@Component({
  selector: 'app-challenge-edit-code',
  templateUrl: './challenge-edit-code.component.html',
  styleUrls: ['./challenge-edit-code.component.scss']
})
export class ChallengeEditCodeComponent implements OnInit, AfterViewInit {

  @Input() challenge: ChallengeEdit = new ChallengeEdit();
  @ViewChild("editor") private editor: ElementRef<HTMLElement>;
  aceEditor;

  types : ParameterType[] = [];

  requiredEmpty : boolean = false;

  constructor(
    private masterService: MasterService
  ) { }

  ngOnInit(): void {

    this.masterService.findParameterTypes().subscribe(
      (types: ParameterType[]) => {
        this.types = types;
      }
    );

  }

  ngOnChanges(changes: SimpleChanges) {        
    this.changeCode();
    
}

  ngAfterViewInit(): void {
    ace.config.set("fontSize", "14px");
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict')

    this.aceEditor = ace.edit(this.editor.nativeElement);
    this.aceEditor.setTheme('ace/theme/twilight');
    this.aceEditor.session.setMode('ace/mode/java');
    this.aceEditor.setReadOnly(true);
  }

  removeInParameter() : void {
    this.challenge.inParameter.pop();

    this.challenge.test = [];

    if (this.challenge.inParameter.length == 0) {
      this.addInParameter();
    }
    else {

      this.requiredEmpty = false;
      
      let isEmpty = this.checkEmptyInParameters();
      if (isEmpty) {
        this.requiredEmpty = true;
      }
    }

    this.changeCode();
  }

  addInParameter() : void {
    this.requiredEmpty = false;

    let isEmpty = this.checkEmptyInParameters();
    if (isEmpty) {
      this.requiredEmpty = true;
      return;
    }

    this.challenge.inParameter.push(new Parameter());
  }

  changeParameter() : void {

    this.challenge.test = [];

    this.changeCode();
  }

  changeCode() : void {

    if (this.aceEditor == null) return;
    if (this.aceEditor.session == null) return;
    
    this.aceEditor.session.setValue(this.generateCode());

  }

  generateCode() : string {

    if (this.challenge.className == null || this.challenge.functionName == null) return "Falta rellenar los campos obligatorios";

    let code = "/**\n";
    code += " * Reto: "+this.challenge.name+"\n";
    code += " *\n";
    code += " */\n";

    code += "public class "+this.challenge.className+" {\n\n";

    code += "\tpublic "+this.getOutParameter()+" "+this.challenge.functionName+"("+this.getInParameters()+") {\n";
    code += "\n";
    code += "\t}";

    code += "\n";
    code += "}";

    return code;
  }


  private getOutParameter() {
    if (this.challenge.outParameter.type != null) return this.challenge.outParameter.type;
        
    return "void";
  }

  private getInParameters() {

    if (this.challenge.inParameter == null) return "";

    let inParameters = "";


    this.challenge.inParameter.forEach(item => {
      
      if (item.type != null && item.name != null && item.name.length > 0) {
        if (inParameters.length > 0) inParameters += ", ";

        inParameters += item.type + " " + item.name;
      }
    });


    return inParameters;

  }

  private checkEmptyInParameters() : boolean {

    if (this.challenge.inParameter == null) { return false;}
    

    for (let i = 0; i < this.challenge.inParameter.length; i++) {
      let item = this.challenge.inParameter[i];
      
      if (item.type == null || item.name == null || item.name.length == 0) {
        return true;
      }
    }
      
    return false;    
  }

}
