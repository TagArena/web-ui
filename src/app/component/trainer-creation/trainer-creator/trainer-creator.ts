import {Component, inject, model} from '@angular/core';
import {TrainerService} from '../../../service/trainer/trainer.service';
import {Trainer} from '../../../model/trainer';
import {CreatedTrainer} from '../created-trainer/created-trainer.component';

@Component({
  selector: 'app-trainer-creator',
  imports: [
    CreatedTrainer
  ],
  templateUrl: './trainer-creator.html',
  standalone: true,
  styleUrl: './trainer-creator.css'
})
export class TrainerCreator {
  protected readonly Number = Number;
  private trainerService = inject(TrainerService);
  protected createdTrainers: Trainer[] = []

  createTrainers(trainerCount: number) {
    this.createdTrainers = []
    for (let i = 0; i < trainerCount; i++) {
      this.trainerService.createTrainer().subscribe(trainer => {this.createdTrainers.push(trainer);});
    }
  }

}
