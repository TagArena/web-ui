import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-page-header',
  imports: [],
  standalone: true,
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css'
})
export class PageHeaderComponent {

  constructor(private router: Router) {
  }


  changePage(page: string) {
    let enteredPassword = window.prompt("Please enter the admin Password");
    if (enteredPassword !== environment.adminPassword) {
      window.alert("Wrong password!")
      return;
    }

    let route;
    if (page == 'HOME') {
      route = '';
    }else if (page == 'CREATE_TRAINERS') {
      route = '/create/trainers';

    } else if (page == 'SCAN_TRAINERS') {
      route = '/read/trainers';
    } else {
      return;
    }
    this.router.navigate([route])
  }
}
