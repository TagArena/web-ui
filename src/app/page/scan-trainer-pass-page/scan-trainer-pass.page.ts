import {Component} from '@angular/core';
import {TrainerPassScanner} from '../../component/trainer-creation/trainer-pass-scanner/trainer-pass-scanner';

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
  protected trainerId!: number;


  handleTrainerIdScan(trainerId: number) {
    this.trainerId = trainerId
  }
}
