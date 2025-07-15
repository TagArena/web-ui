import {Component, inject, input, output} from '@angular/core';
import {Trainer} from '../../../model/trainer';
import {FormsModule} from '@angular/forms';
import {TrainerService} from '../../../service/trainer/trainer.service';

@Component({
  selector: 'app-modify-trainer',
  imports: [
    FormsModule
  ],
  standalone: true,
  templateUrl: './modify-trainer.component.html',
  styleUrl: './modify-trainer.component.css'
})
export class ModifyTrainerComponent {

  trainer = input.required<Trainer>();
  close = output();
  private trainerService: TrainerService = inject(TrainerService)
  protected trainerUpdated: boolean = false;

  constructor() {
  }

  emitCloseEvent() {
    this.close.emit();
  }

  sendTrainerUpdates(trainer: Trainer) {
    this.trainerService.updateTrainer(trainer.id, trainer).subscribe(() => {
      this.trainerUpdated = true;
      setTimeout(() => this.close.emit(), 5000)
    });
  }
}
