import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerCreator } from './trainer-creator';

describe('TrainerCreator', () => {
  let component: TrainerCreator;
  let fixture: ComponentFixture<TrainerCreator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerCreator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerCreator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
