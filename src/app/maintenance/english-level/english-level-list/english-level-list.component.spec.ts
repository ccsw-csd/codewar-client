import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishLevelListComponent } from './english-level-list.component';

describe('EnglishLevelListComponent', () => {
  let component: EnglishLevelListComponent;
  let fixture: ComponentFixture<EnglishLevelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishLevelListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishLevelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
