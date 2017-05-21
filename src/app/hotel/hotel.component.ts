import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vacation } from '../data/data';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements AfterViewInit {

  @Input()
  public vacationItem: Vacation;

  @Input()
  public isFirst: Boolean;

  @Output()
  public onSelectItem2: EventEmitter<Vacation> = new EventEmitter();

  public constructor(private cdRef: ChangeDetectorRef) {
  }

  public ngAfterViewInit(): void {
    if (this.isFirst) {
      setTimeout(() => {
        this.onSelectItem2.emit(this.vacationItem);
      }, 0);
      // this.onSelectItem2.emit(this.vacationItem);
      // this.cdRef.detectChanges();
    }
  }
  public selectItem(): void {
    // this.onSelectItem2.emit(this.vacationItem);
    // this.cdRef.detectChanges();
  }
}
