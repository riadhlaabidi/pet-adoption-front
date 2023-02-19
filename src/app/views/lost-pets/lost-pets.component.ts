import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../shared/data.service";

@Component({
  selector: 'app-lost-pets',
  templateUrl: './lost-pets.component.html',
  styleUrls: ['./lost-pets.component.css']
})
export class LostPetsComponent {
  currentRoute = '';

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.url.subscribe(urlSegments => {
      this.currentRoute = urlSegments.map(segment => segment.path).join('/');
      dataService.setData(this.currentRoute)
    });
  }
}
