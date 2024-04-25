import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {


  title = "This World is Full of Chaos"

  cal = 5/0

  birthDay= 16

}
