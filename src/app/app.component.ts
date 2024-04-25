import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Data Binding Example';
  imageUrl = 'https://via.placeholder.com/150';
  imageAlt = 'Placeholder Image';
  name = '';

  onButtonClick(): void {
    alert('Button clicked!');
  }
}
