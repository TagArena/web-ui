import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTrainerPage } from './modify-trainer.page';

describe('HomePage', () => {
  let component: ModifyTrainerPage;
  let fixture: ComponentFixture<ModifyTrainerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyTrainerPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyTrainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
