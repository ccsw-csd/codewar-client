import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Test } from 'src/app/challenge/to/Test';
import { EventData } from 'src/app/core/to/EventData';

@Component({
  selector: 'app-test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.scss']
})
export class TestCardComponent implements OnInit {

  @Input() readonly: boolean;
  @Input() item: Test;
  @Output() eventEmitter = new EventEmitter<EventData<Test>>();

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.eventEmitter.next(new EventData<Test>('delete', this.item));
  }

  edit() {
    this.eventEmitter.next(new EventData<Test>('edit', this.item));
  }
  
  getInParameter(item : Test) : string {
    return item.valueIn.map(item => item.value).join(' | ');
  }

  getOutParameter(item : Test) : string {
    return item.valueOut.value;
  }

  getName(item : Test) : string {
    if (item.name != null) return item.name;

    return '';
  }

  getTimeout(item : Test) : string {
    if (item.timeout != null) return ''+item.timeout;

    return 'n/a';
  }
}
