import { AfterViewInit, Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Challenge } from 'src/app/admin-role/models/Challenge';
import { ChallengeEdit } from 'src/app/admin-role/models/ChallengeEdit';
import { ChallengeService } from '../../../services/challenge.service';
import { ParameterType } from 'src/app/core/models/ParameterType';
import { ChallengeParameter } from 'src/app/admin-role/models/ChallengeParameter';
import * as ace from "ace-builds";

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit, AfterViewInit {

  @Input() challenge: ChallengeEdit;
  @ViewChild("editor") private editor: ElementRef<HTMLElement>;
  aceEditor;

  listParameters: ParameterType[] = [];
  
  parametersIn: ChallengeParameter[] = [];
  parameterOut: ChallengeParameter;


  constructor(private challengeService: ChallengeService) { }

  ngOnInit(): void {
    this.getParameterTypes();
    this.changeCode();    
    
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

    this.changeCode();
  }


  getParameterTypes() {

    if (this.challenge != null && this.challenge.challengeParameters != null) {
      this.parameterOut = this.challenge.challengeParameters.filter(item => item.isInput == false)[0];
      this.parametersIn = this.challenge.challengeParameters.filter(item => item.isInput == true);
    }


    this.challengeService.getParameterTypes().subscribe({
      next: data => {
        this.listParameters = data;

        if (this.challenge == null || this.challenge.challengeParameters == null) {
          this.parameterOut = {
            order: 0,
            isInput: true,
            parameterType: data[0]
          };
    
          this.parametersIn = [{
            order: 1,
            isInput: false,
            parameterType: data[0]
          }];

          this.changeCode();
        }

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
      order: this.parametersIn.length + 1,
      isInput: true,
    };
    this.parametersIn.push(newParameter);
  }

  deleteParameter(parameter: ChallengeParameter) {
    if (this.parametersIn.length === 1) {
      return;
    }

    const index = this.parametersIn.indexOf(parameter);
    if (index > -1) {
      this.parametersIn.splice(index, 1);
    }

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

    code += "\tpublic "+this.generateCodeParameterOut()+" "+this.challenge.functionName+"("+this.generateCodeParametersIn()+") {\n";
    code += "\n";
    code += "\t}";

    code += "\n";
    code += "}";

    return code;
  }  
  

  private generateCodeParameterOut() {

    if (this.parameterOut == null || this.parameterOut.parameterType == null) return "void";

    return this.parameterOut.parameterType.code;
  }

  private generateCodeParametersIn() {
    if (this.parametersIn == null || this.parametersIn.length == 0) return "";

    let inParameters = "";


    this.parametersIn.forEach(item => {
      
      if (item.parameterType != null && item.name != null && item.name.length > 0) {
        if (inParameters.length > 0) inParameters += ", ";

        inParameters += item.parameterType.code + " " + item.name;
      }
    });


    return inParameters;

  }

}
