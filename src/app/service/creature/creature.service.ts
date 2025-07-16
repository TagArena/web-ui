import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RestHttpService} from '../httpservice/rest-http.service';
import {Creature} from '../../model/creature';

@Injectable({
  providedIn: 'root'
})
export class CreatureService {

  private httpService = inject(RestHttpService);

  getStarterCreatures(trainerid: number): Observable<Creature[]> {
    let path = 'starterCreatures?trainerId=' + trainerid;
    return this.httpService.sendGetCollectionRequest('creature', path);
  }

  createCreature(creature: Creature) {
    return this.httpService.sendPostRequest('creature', 'creatures', creature);
  }
}
