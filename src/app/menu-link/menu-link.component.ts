import { Component } from '@angular/core';

@Component({
  selector: 'menu-link',
  templateUrl: './menu-link.component.html',
  styleUrls: ['./menu-link.component.css'],
})
export class MenuLinkComponent {
  onClick() {
    console.log('taking you to the menu...');
  }
}
