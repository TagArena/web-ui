import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerPassScanner } from './trainer-pass-scanner';

describe('TrainerPassScanner', () => {
  let component: TrainerPassScanner;
  let fixture: ComponentFixture<TrainerPassScanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerPassScanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerPassScanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
