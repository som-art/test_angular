import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
message = 'This is a test message';
showMenu = false;

toggleMenu() {
  this.showMenu = !this.showMenu;
}
}
