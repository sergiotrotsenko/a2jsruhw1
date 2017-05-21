import { Pipe, PipeTransform } from '@angular/core';
import {Vacation} from '../../data/data';

@Pipe({
  name: 'filterListPipe'
})
export class FilterListPipe implements PipeTransform {

  public transform(vacationList: Vacation[], filterTerm: string): Vacation[] {
    if (!filterTerm) {
      return vacationList;
    }
    return vacationList
      .filter(
        (vacation: Vacation) => {
          return vacation.type === filterTerm;
        }
      );
  }
}

