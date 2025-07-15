import {Component} from '@angular/core';
import {ModifyTrainerComponent} from '../../component/trainer/modify-trainer/modify-trainer.component';
import {Trainer} from '../../model/trainer';
import {TrainerPassScanner} from '../../component/trainer/trainer-pass-scanner/trainer-pass-scanner';

@Component({
  selector: 'modify-trainer.page',
  imports: [ModifyTrainerComponent, TrainerPassScanner],
  standalone: true,
  templateUrl: './modify-trainer.page.html',
  styleUrl: './modify-trainer.page.css'
})
export class ModifyTrainerPage {

  protected trainer: Trainer | undefined

  handleTrainerScanSuccess(scannedTrainer: Trainer) {
    this.trainer = scannedTrainer;
  }

  closeModifyTrainer() {
    this.trainer = undefined;
  }
}
