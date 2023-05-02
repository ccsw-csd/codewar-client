import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyramidTeamListComponent } from './pyramid-team-list.component';

describe('PyramidTeamListComponent', () => {
  let component: PyramidTeamListComponent;
  let fixture: ComponentFixture<PyramidTeamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyramidTeamListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyramidTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
