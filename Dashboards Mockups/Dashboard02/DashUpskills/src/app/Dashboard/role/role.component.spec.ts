import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ROleComponent } from './role.component';

describe('ROleComponent', () => {
  let component: ROleComponent;
  let fixture: ComponentFixture<ROleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ROleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ROleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
