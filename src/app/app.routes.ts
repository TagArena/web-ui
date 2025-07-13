import {Routes} from '@angular/router';
import {CreateTrainersPage} from './page/create-trainers-page/create-trainers.page';
import {ScanTrainerPassPage} from './page/scan-trainer-pass-page/scan-trainer-pass.page';

export const routes: Routes = [
  {
    path: 'create/trainers',
    component: CreateTrainersPage
  },
  {
    path: 'read/trainers',
    component: ScanTrainerPassPage
  }
];
