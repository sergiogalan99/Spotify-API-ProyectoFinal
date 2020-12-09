import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaratulasPlaylistComponent } from './caratulas-playlist.component';

describe('CaratulasPlaylistComponent', () => {
  let component: CaratulasPlaylistComponent;
  let fixture: ComponentFixture<CaratulasPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaratulasPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaratulasPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
