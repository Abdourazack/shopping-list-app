import { Component } from '@angular/core';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShoppingListComponent,], // ❌ Enlève FilterPipe
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-list-app';
}
