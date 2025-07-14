import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PageFooterComponent} from './component/page-footer-component/page-footer.component';
import {PageHeaderComponent} from './component/page-header/page-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PageFooterComponent, PageHeaderComponent],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tagarena-webui';
}
