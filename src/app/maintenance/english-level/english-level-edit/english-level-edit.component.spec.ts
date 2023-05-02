import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishLevelEditComponent } from './english-level-edit.component';

describe('EnglishLevelEditComponent', () => {
  let component: EnglishLevelEditComponent;
  let fixture: ComponentFixture<EnglishLevelEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishLevelEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishLevelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
