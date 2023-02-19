import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-pets',
  templateUrl: './search-pets.component.html',
  styleUrls: ['./search-pets.component.css'],
})
export class SearchPetsComponent implements OnInit {
  sortMenuPopover = false;
  filterMenuPopover = false;

  ngOnInit(): void {}

  toggleSortMenu() {
    this.sortMenuPopover = !this.sortMenuPopover;
  }

  toggleFilterMenu() {
    this.filterMenuPopover = !this.filterMenuPopover;
  }
}
