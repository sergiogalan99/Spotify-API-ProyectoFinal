import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPrincipalHomeComponent } from './mi-principal-home.component';

describe('MiPrincipalHomeComponent', () => {
  let component: MiPrincipalHomeComponent;
  let fixture: ComponentFixture<MiPrincipalHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiPrincipalHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPrincipalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
