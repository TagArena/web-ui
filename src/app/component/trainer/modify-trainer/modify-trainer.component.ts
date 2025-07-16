import {Component, inject, input, OnInit, output} from '@angular/core';
import {Trainer} from '../../../model/trainer';
import {FormsModule} from '@angular/forms';
import {TrainerService} from '../../../service/trainer/trainer.service';
import {CreatureService} from '../../../service/creature/creature.service';
import {Creature} from '../../../model/creature';
import {CreatureFrameComponent} from '../../creature/creature-frame/creature-frame.component';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-modify-trainer',
  imports: [
    FormsModule,
    CreatureFrameComponent,
    NgClass
  ],
  standalone: true,
  templateUrl: './modify-trainer.component.html',
  styleUrl: './modify-trainer.component.css'
})
export class ModifyTrainerComponent implements OnInit {

  trainer = input.required<Trainer>();
  close = output();
  protected trainerUpdated: boolean = false;
  protected starterCreatures: Creature[] = []
  protected selectedCreature: Creature | undefined;
  private trainerService: TrainerService = inject(TrainerService);
  private creatureService: CreatureService = inject(CreatureService);

  ngOnInit(): void {
    this.creatureService.getStarterCreatures(this.trainer().id).subscribe(starterCreatures => this.starterCreatures = starterCreatures)
  }

  emitCloseEvent() {
    this.close.emit();
  }

  sendTrainerUpdates() {

    const updateTrainer = () => {
      this.trainerService.updateTrainer(this.trainer().id, this.trainer()).subscribe(() => {
        this.trainerUpdated = true;
        setTimeout(() => this.close.emit(), 5000);
      });
    };

    if (this.selectedCreature) {
      this.creatureService.createCreature(this.selectedCreature).subscribe(() => {
        this.selectedCreature = undefined;
        updateTrainer();
      });
    } else {
      updateTrainer();
    }
  }

  selectCreature(starterCreature: Creature) {
    this.selectedCreature = starterCreature
  }
}
