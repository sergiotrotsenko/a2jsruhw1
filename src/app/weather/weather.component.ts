import { Component, Input, OnInit } from '@angular/core';
import { Vacation} from '../data/data';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input()
  public selectedItem: Vacation;

  public constructor() { }

  public ngOnInit(): void {
  }

}
