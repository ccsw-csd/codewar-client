import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Challenge } from 'src/app/core/models/Challenge';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent {

  @Input() challenge: Challenge;
  @Input() filterForm: FormGroup;
}
