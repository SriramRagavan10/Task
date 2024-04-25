import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  // imageUrl = 'https://via.placeholder.com/2000';
  // imageAlt = 'Placeholder Image';

  private extractImageName(imagePath: string): string {
    // Split the imagePath by '\\' and get the last part, which should be the filename
    const parts = imagePath.split('\\');
    return parts[parts.length - 1];
  }

  systemImage = 'assets\\1.png';
  imageAlt = this.extractImageName(this.systemImage);
  

}
