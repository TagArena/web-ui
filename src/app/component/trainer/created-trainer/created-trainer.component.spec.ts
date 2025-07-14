import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedTrainer } from './created-trainer.component';

describe('Trainer', () => {
  let component: CreatedTrainer;
  let fixture: ComponentFixture<CreatedTrainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatedTrainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedTrainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
