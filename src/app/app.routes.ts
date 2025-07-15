import {Routes} from '@angular/router';
import {CreateTrainersPage} from './page/create-trainers-page/create-trainers.page';
import {ScanTrainerPassPage} from './page/scan-trainer-pass-page/scan-trainer-pass.page';
import {HomePage} from './page/home-page/home.page';
import {ModifyTrainerPage} from './page/modify-trainer-page/modify-trainer.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'create/trainers',
    component: CreateTrainersPage
  },
  {
    path: 'read/trainers',
    component: ScanTrainerPassPage
  },
  {
    path: 'modify/trainer',
    component: ModifyTrainerPage
  }

];
