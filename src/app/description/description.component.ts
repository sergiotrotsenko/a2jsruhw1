import { Component, Input, OnInit } from '@angular/core';
import { Vacation } from '../data/data';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  @Input()
  public selectedItem: Vacation;

  public constructor() { }

  public ngOnInit(): void {
  }

}
