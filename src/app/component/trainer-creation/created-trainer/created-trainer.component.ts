import {Component, input, OnInit, output, OutputEmitterRef} from '@angular/core';
import {Trainer} from '../../../model/trainer';
import {QRCodeComponent} from 'angularx-qrcode';
import {environment} from '../../../../environments/environment';
import {SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'created-trainer',
  imports: [
    QRCodeComponent
  ],
  templateUrl: './created-trainer.component.html',
  standalone: true,
  styleUrl: './created-trainer.component.css'
})
export class CreatedTrainer implements OnInit {
  trainer = input.required<Trainer>();
  protected trainerUrl = '';
  qrCodeDownloadUrlEmitter: OutputEmitterRef<SafeUrl> = output<SafeUrl>();    // OutputEmitterRef<string>
  protected qrCodeDownloadUrl: SafeUrl | null = null;

  constructor() {

  }

  ngOnInit(): void {
    this.trainerUrl = environment.httpProtocol + "://" + window.location.hostname + "/trainers/" + this.trainer().id;
  }

  onChangeURL(url: SafeUrl): void {
    this.qrCodeDownloadUrlEmitter.emit(url);
    this.qrCodeDownloadUrl = url;
  }
}
