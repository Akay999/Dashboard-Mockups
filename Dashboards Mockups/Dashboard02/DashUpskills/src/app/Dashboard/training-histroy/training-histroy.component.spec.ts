import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingHistroyComponent } from './training-histroy.component';

describe('TrainingHistroyComponent', () => {
  let component: TrainingHistroyComponent;
  let fixture: ComponentFixture<TrainingHistroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingHistroyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingHistroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
