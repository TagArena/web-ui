import {Component, input} from '@angular/core';
import {Trainer} from '../../../model/trainer';

@Component({
  selector: 'created-trainer',
  imports: [],
  templateUrl: './created-trainer.component.html',
  standalone: true,
  styleUrl: './created-trainer.component.css'
})
export class CreatedTrainer {
  trainer = input.required<Trainer>();
}
