import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Editor } from 'ngx-editor';
import { Challenge } from '../to/Challenge';
import { ParticipationService } from '../services/participation.service';
import { DialogComponent } from 'src/app/core/dialog/dialog.component';

import * as ace from "ace-builds";
import { Annotation } from 'brace';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/snippets/java';
import 'ace-builds/src-noconflict/ext-language_tools';
import { ConsoleComponent } from './console/console.component';
import { CompilationResponse } from '../to/CompilationResponse';

@Component({
  selector: 'app-challenge-participation',
  templateUrl: './challenge-participation.component.html',
  styleUrls: ['./challenge-participation.component.scss']
})
export class ChallengeParticipationComponent implements OnInit, OnDestroy, AfterViewInit {

  lastExecution: CompilationResponse;
  challenge : Challenge;
  descriptor: Editor;
  challengeId : null;
  isloading : boolean = false;  

  @ViewChild("editor") private editor: ElementRef<HTMLElement>;
  aceEditor: ace.Ace.Editor;
  
  constructor(
    private route: ActivatedRoute, 
    private participationService : ParticipationService,
    private matDialog: MatDialog,
    private router: Router,
  ) {
    this.challenge = new Challenge();
   }

  ngOnDestroy(): void {
    this.descriptor.destroy();
  }


  ngOnInit(): void {
    this.lastExecution = null;

    this.descriptor = new Editor({      
    });

    this.route.params.subscribe(params => {

      if (params != null && params['id'] != null) {
        this.challengeId = params['id']; 

        this.load();
      }
   });
  }

  load() : void {
    this.isloading = true;

    if (this.challengeId != null) {
      this.participationService.get(this.challengeId).subscribe((data) => {
        this.challenge = data.challenge;
        this.isloading = false;   
        
        this.aceEditor.session.setValue(this.challenge.baseCode);
      });
    }      
  }

  ngAfterViewInit(): void {
    ace.config.set("fontSize", "14px");
    ace.config.set('basePath', './assets/ace-builds')

    this.aceEditor = ace.edit(this.editor.nativeElement);
    this.aceEditor.setTheme('ace/theme/twilight');
    this.aceEditor.session.setMode('ace/mode/java');
    this.aceEditor.setReadOnly(false);
    this.aceEditor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true,
    });
  }

  sendParticipation(): void {

    let message = '';
    let height = '';

    if (this.challenge.multipleTries) {
      message = 'Antes de enviar la participación, compruebe que el código es correcto y que funcionan correctamente las pruebas de código.<br/>&nbsp;<br/>¿Está seguro que desea enviar su participación con el código actual?';
      height = '285px';
    }
    else {
      message = 'Atención, este reto solo dispone <b>un intento</b>. Si envía el código ya no podrá volver a participar.<br/>&nbsp;<br/>Por favor, antes de enviar la participación, compruebe que el código es correcto y que funcionan correctamente las pruebas de código.<br/>&nbsp;<br/>¿Está seguro que desea enviar su participación con el código actual?';
      height = '350px';
    }


    const modalDialog = this.matDialog.open(DialogComponent, {
      height: height,
      width: "550px",
      data: {title: '¿Desea enviar su participarción?', description: message}
    });


    modalDialog.afterClosed().subscribe(result => {

      if (result == true) {

        this.isloading = true;

        this.participationService.send(this.challengeId, this.aceEditor.session.getValue()).subscribe(
          response => {            
            this.isloading = false;
            this.router.navigate(['participations']);
          }
        );
      }
    });
  }

  reset(): void {
    const modalDialog = this.matDialog.open(DialogComponent, {
      height: "225px",
      width: "550px",
      data: {title: '¿Desea reestablecer el código?', description: 'Atención, si reestablece el código perderá el código actual que haya escrito. ¿Está seguro que desea reestablecer el código original?'}
    });


    modalDialog.afterClosed().subscribe(result => {
      if (result == true) {

        this.lastExecution = null;
        this.aceEditor.session.setValue(this.challenge.baseCode);
        this.aceEditor.getSession().clearAnnotations();        
      }
    });
  }


  console(): void {

    if (this.lastExecution == null) return;

    const modalDialog = this.matDialog.open(ConsoleComponent, {
      height: "800px",
      width: "1000px",
      data: this.lastExecution
    });  
  }

  execute(): void {

    this.isloading = true;

    this.participationService.execute(this.challengeId, this.aceEditor.session.getValue()).subscribe(
      response => {
        
        this.isloading = false;

        if (response.compileError === true) {
          const annotations: Annotation[] = [];
          response.errors.forEach(fail => {
            annotations.push({
              row: fail.linePosition - 1,
              column: 0,
              text: fail.errorMessage,
              type: 'error',
            });
          });

          this.aceEditor.getSession().setAnnotations(annotations);

        }

        else {
          this.aceEditor.getSession().clearAnnotations();
          this.lastExecution = response;

          this.console();
        }

      }
    )
  }

}
