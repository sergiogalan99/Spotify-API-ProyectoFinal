import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksSearchedComponent } from './tracks-searched.component';

describe('TracksSearchedComponent', () => {
  let component: TracksSearchedComponent;
  let fixture: ComponentFixture<TracksSearchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TracksSearchedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TracksSearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
