import { Component, OnInit, Input } from '@angular/core';
import {
  MatTooltipDefaultOptions,
  MAT_TOOLTIP_DEFAULT_OPTIONS,
} from '@angular/material/tooltip';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 500,
  hideDelay: 200,
  touchendHideDelay: 1000,
};

@Component({
  selector: 'chip',
  templateUrl: './card-chip.component.html',
  styleUrls: ['./card-chip.component.scss'],
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults },
  ],
})
export class CardChipComponent implements OnInit {
  @Input() style = 'filled';
  @Input() icon = '';
  @Input() size = '14px';
  @Input() fontSize = '14px';
  @Input() tooltip: string = '';

  constructor() { }

  ngOnInit() { }
}
