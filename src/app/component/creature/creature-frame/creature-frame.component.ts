import {Component, input} from '@angular/core';
import {Creature} from '../../../model/creature';

@Component({
  selector: 'app-creature-frame',
  imports: [],
  standalone: true,
  templateUrl: './creature-frame.component.html',
  styleUrl: './creature-frame.component.css'
})
export class CreatureFrameComponent {

  creature = input.required<Creature>();
  protected readonly JSON = JSON;
}
