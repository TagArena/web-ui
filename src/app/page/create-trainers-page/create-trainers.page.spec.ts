import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrainersPage } from './create-trainers.page';

describe('CreateTrainersPage', () => {
  let component: CreateTrainersPage;
  let fixture: ComponentFixture<CreateTrainersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTrainersPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTrainersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
