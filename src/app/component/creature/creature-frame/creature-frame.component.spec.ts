import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatureFrameComponent } from './creature-frame.component';

describe('CreatureFrameComponent', () => {
  let component: CreatureFrameComponent;
  let fixture: ComponentFixture<CreatureFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatureFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatureFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
