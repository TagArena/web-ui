import {inject, Injectable} from '@angular/core';
import {HttpService} from '../httpservice/http.service';
import {Observable} from 'rxjs';
import {Trainer} from '../../model/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  private httpService = inject(HttpService);

  constructor() {
  }

  createTrainer(): Observable<Trainer> {
    return this.httpService.sendPostRequest('trainer', 'trainers',null);
  }

  getTrainer(trainerId: string): Observable<Trainer> {
    return this.httpService.sendGetRequest('trainer', 'trainers', trainerId);
  }
}
