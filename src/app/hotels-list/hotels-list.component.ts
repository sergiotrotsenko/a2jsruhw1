import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Vacation, vacationList$} from '../data/data';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {
  public vacationList$: Observable<Vacation[]>;
  public vacationList: Vacation[];
  public  filterTerm: string;
  public selectedItem: Vacation;

  public filterListTerms: string[] = ['hotels', 'fishing', 'tours', 'weather'];
  @Output()
  public onSelectItem: EventEmitter<Vacation> = new EventEmitter();

  public constructor() {
    // vacationList$.subscribe((vacationList: Vacation[]) => {
    //   this.vacationList = vacationList;
    // });
  }

  public ngOnInit(): void {
    this.vacationList$ = vacationList$;
    this.filterTerm = 'fishing';

  }
  public selectFilter(filterTerm: string): void {
    this.filterTerm = filterTerm;
  }
  public selectOnEventItem(item: Vacation): void {
    this.selectedItem = item;
    this.onSelectItem.emit(this.selectedItem);
  }
  public selectItem(item: Vacation): void {
    this.selectedItem = item;
    this.onSelectItem.emit(this.selectedItem);
  }
  // public trackByFn(index: number, item: Vacation): void {
  //   console.log(item);
  // }

}
