import {Component, inject, output, OutputEmitterRef} from '@angular/core';
import {BarcodeFormat} from '@zxing/library';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {Trainer} from '../../../model/trainer';
import {TrainerService} from '../../../service/trainer/trainer.service';

@Component({
  selector: 'app-trainer-pass-scanner',
  imports: [
    ZXingScannerModule
  ],
  standalone: true,
  templateUrl: './trainer-pass-scanner.html',
  styleUrl: './trainer-pass-scanner.css'
})
export class TrainerPassScanner {

  protected readonly BarcodeFormat = BarcodeFormat;
  private trainerIdRegex: RegExp = /\/trainers\/(\d+)/;
  trainerEmitter: OutputEmitterRef<Trainer> = output<Trainer>();
  private trainerService: TrainerService = inject(TrainerService);

  handleCodeScanSuccess(qrCode: string) {
    console.log(qrCode)
    const match = RegExp(this.trainerIdRegex).exec(qrCode);
    if (match == null) return;
    let $trainer = this.trainerService.getTrainer(Number(match[1]));
    $trainer.subscribe(trainer => this.trainerEmitter.emit(trainer))
  }
}
