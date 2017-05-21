import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class Vacation {
  public type: string;
  public name: string;
  public addressPart1: string;
  public addressPart2: string;
  public logo: string;
  public imagesList: string[];
  public tel:  string;
  public weather: {
    temperature: number,
    waterTemperature: number;
    sky: string
  };
  public followers: number;
  public following: number;
}

const VACATIONLIST: Vacation[] = [
  {
    type: 'hotels',
    name: 'hotel 1',
    addressPart1: 'address 1',
    addressPart2: 'address 2',
    logo: 'assets/images/1.jpg',
    imagesList: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
    tel: '090909',
    weather: {
      temperature: 10,
      waterTemperature: 5,
      sky: 'cloudy'
    },
    followers: 3000,
    following: 1000
  },
  {
    type: 'fishing',
    name: 'fishing 1',
    addressPart1: 'address 1',
    addressPart2: 'address 2',
    logo: 'assets/images/1.jpg',
    imagesList: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
    tel: '090909',
    weather: {
      temperature: 30,
      waterTemperature: 25,
      sky: 'clear'
    },
    followers: 5000,
    following: 3000
  },
  {
    type: 'fishing',
    name: 'fishing 2',
    addressPart1: 'address 1',
    addressPart2: 'address 2',
    logo: 'assets/images/1.jpg',
    imagesList: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
    tel: '090909',
    weather: {
      temperature: 31,
      waterTemperature: 26,
      sky: 'clear'
    },
    followers: 5000,
    following: 3000
  },
  {
    type: 'tours',
    name: 'tour 1',
    addressPart1: 'address 1',
    addressPart2: 'address 2',
    logo: 'assets/images/1.jpg',
    imagesList: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
    tel: '090909',
    weather: {
      temperature: -10,
      waterTemperature: 10,
      sky: 'clear'
    },
    followers: 4000,
    following: 2000
  }
]

export const vacationList$: Observable<Vacation[]> = Observable.of(VACATIONLIST);

