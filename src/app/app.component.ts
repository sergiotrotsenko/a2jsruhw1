import { Component } from '@angular/core';
import { Vacation } from './data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public selectedItem: Vacation;

  public onSelectItem(item: Vacation): void {
    this.selectedItem = item;
  }
}
