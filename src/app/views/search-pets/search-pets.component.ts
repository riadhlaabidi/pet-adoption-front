import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-pets',
  templateUrl: './search-pets.component.html',
  styleUrls: ['./search-pets.component.css'],
})
export class SearchPetsComponent implements OnInit {
  sortMenuPopover = false;

  ngOnInit(): void {}
  toggleSortMenu(event: any) {
    event.preventDefault();
    this.sortMenuPopover = !this.sortMenuPopover;
  }
}
