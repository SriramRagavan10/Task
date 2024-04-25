import { Component, EventEmitter, OnInit, Output, input } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {

  message: string | null = null;

  //Click Event
  buttonOn(): void {
    this.message = 'Success';
    setTimeout(() => {
      this.message = null;
    }, 5000); // Hide the message after 5 seconds
  }

  input:string=''

  //Input Event
  onInput(event: any): void {
    console.log('Input value:', event.target.value);    //It is show the typing letters
    this.input=event.target.value
  }

  //Mouseover Event
  onMouseOver(): void {
    console.log('Mouse over event!');
  }

  keys:string=''
  //Keydown Event
  onKeyDown(event: any): void {
    console.log('Key pressed:', event.key);    //It is used to count the pressing keys
    this.keys=event.key
  }
  
  //Custom Event
  @Output() myCustomEvent = new EventEmitter<void>();

  onCustomEvent(): void {
    this.myCustomEvent.emit();
    console.log('Custom event emitted from child component');
  }

}
