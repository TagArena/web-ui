import {Component, output, OutputEmitterRef} from '@angular/core';
import {BarcodeFormat} from '@zxing/library';
import {ZXingScannerModule} from '@zxing/ngx-scanner';

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
  private trainerIdRegex: RegExp = /\/trainers\/(\d+)\/?$/;
  trainerIdEmitter: OutputEmitterRef<number> = output<number>();

  handleCodeScanSuccess(qrCode: string) {
    const match = RegExp(this.trainerIdRegex).exec(qrCode);
    if (match == null) return;
    this.trainerIdEmitter.emit(Number(match[1]))
  }
}
