import { Component } from '@angular/core';

@Component({
  selector: 'order-button',
  templateUrl: './order-button.component.html',
  styleUrls: ['./order-button.component.css'],
})
export class OrderButtonComponent {
  onClick() {
    console.log('hello world');
  }
}
