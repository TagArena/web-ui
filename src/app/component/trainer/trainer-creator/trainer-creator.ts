import {Component, inject, SecurityContext} from '@angular/core';
import {TrainerService} from '../../../service/trainer/trainer.service';
import {Trainer} from '../../../model/trainer';
import {CreatedTrainer} from '../created-trainer/created-trainer.component';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import JSZip from 'jszip';
import {saveAs} from 'file-saver';

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
  private trainerService: TrainerService = inject(TrainerService);
  protected createdTrainers: Trainer[] = []
  protected createdQrCodeDownloadUrls: SafeUrl[] = [];

  constructor(private sanitizer: DomSanitizer) {
  }

  createTrainers(trainerCount: number) {
    this.createdTrainers = []
    this.trainerService.createTrainers(trainerCount).subscribe(trainers => {
      this.createdTrainers = trainers
    });
  }

  handleQrCodeDownloadUrl(url: SafeUrl) {
    this.createdQrCodeDownloadUrls.push(url);
  }

  async downloadZIPedQrCodes() {
    let jsZip = new JSZip()
    // Convert each SafeUrl to blob and add it to the zip
    for (let i = 0; i < this.createdQrCodeDownloadUrls.length; i++) {
      let qrCodeDownloadUrl = this.createdQrCodeDownloadUrls[i];
      const sanitizedQrCodeDownloadUrl = this.sanitizer.sanitize(SecurityContext.URL, qrCodeDownloadUrl);
      if (!sanitizedQrCodeDownloadUrl) continue;
      const response = await fetch(sanitizedQrCodeDownloadUrl);
      const blob = await response.blob();
      jsZip.file(`trainer_${i + 1}.svg`, blob);
    }
    jsZip.generateAsync({type: 'blob'}).then(zipBlob => {
      saveAs(zipBlob, 'trainer_codes.zip');
    });
  }
}
