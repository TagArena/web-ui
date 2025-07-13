import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanTrainerPassPage } from './scan-trainer-pass.page';

describe('ScanTrainerPassPage', () => {
  let component: ScanTrainerPassPage;
  let fixture: ComponentFixture<ScanTrainerPassPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScanTrainerPassPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanTrainerPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
