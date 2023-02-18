import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuPopover = false;

  ngAfterViewInit() {}
  toggleMenu(event: any) {
    event.preventDefault();
    if (this.menuPopover) {
      this.menuPopover = false;
    } else {
      this.menuPopover = true;
    }
  }
}
