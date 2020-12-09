import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrackPlayListComponent } from './list-track-play-list.component';

describe('ListTrackPlayListComponent', () => {
  let component: ListTrackPlayListComponent;
  let fixture: ComponentFixture<ListTrackPlayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTrackPlayListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTrackPlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
