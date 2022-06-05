import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPgComponent } from './error-pg.component';

describe('ErrorPgComponent', () => {
  let component: ErrorPgComponent;
  let fixture: ComponentFixture<ErrorPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
