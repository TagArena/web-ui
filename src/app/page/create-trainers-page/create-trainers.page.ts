import { Component } from '@angular/core';
import {CreateTrainerComponent} from "../../component/trainer-creator/create-trainer/create-trainer.component";

@Component({
  selector: 'app-create-trainers.page',
  imports: [CreateTrainerComponent],
  templateUrl: './create-trainers.page.html',
  standalone: true,
  styleUrl: './create-trainers.page.css'
})
export class CreateTrainersPage {

}
