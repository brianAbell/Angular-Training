import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  styles: [`
    h3 {
      color: violet;
    }
  `]
})
export class AppComponent {
  name = 'Brian';
  title = 'Hello im title';
}
