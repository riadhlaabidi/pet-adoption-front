import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../shared/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  footerRoute = '';
  footerhidden = true;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(res => {
      this.footerRoute = res
      this.footerhidden = this.footerRoute != "lostPet";
    })


  }


}
