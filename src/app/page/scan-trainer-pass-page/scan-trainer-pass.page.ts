import {Component} from '@angular/core';
import {TrainerPassScanner} from '../../component/trainer-creation/trainer-pass-scanner/trainer-pass-scanner';
import {Trainer} from '../../model/trainer';

@Component({
  selector: 'app-scan-trainer-pass.page',
  imports: [
    TrainerPassScanner
  ],
  standalone: true,
  templateUrl: './scan-trainer-pass.page.html',
  styleUrl: './scan-trainer-pass.page.css'
})
export class ScanTrainerPassPage {
  protected trainer : Trainer | undefined;


  handleTrainerScan(trainer: Trainer) {
    this.trainer = trainer
  }

  protected readonly JSON = JSON;
}
