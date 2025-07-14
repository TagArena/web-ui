import {inject, Injectable} from '@angular/core';
import {RestHttpService} from '../httpservice/rest-http.service';
import {Observable} from 'rxjs';
import {Trainer} from '../../model/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  private httpService = inject(RestHttpService);

  constructor() {
  }

  createTrainers(amount: number): Observable<Trainer[]> {
    const trainerCreation = {"amount": amount}
    return this.httpService.sendPostRequest('trainer', 'trainers', trainerCreation);
  }

  getTrainer(trainerId: number): Observable<Trainer> {
    return this.httpService.sendGetRequest('trainer', 'trainers', String(trainerId));
  }
}
