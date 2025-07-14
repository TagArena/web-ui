import {Component} from '@angular/core';
import {TrainerCreator} from '../../component/trainer/trainer-creator/trainer-creator';

@Component({
  selector: 'app-create-trainers.page',
  imports: [TrainerCreator],
  templateUrl: './create-trainers.page.html',
  standalone: true,
  styleUrl: './create-trainers.page.css'
})
export class CreateTrainersPage {

}
