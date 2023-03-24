import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor() {}

  getCarById(id: string): Observable<Car | undefined> {
    return of(Cars.find((car) => car.id === id));
  }
}

export const Cars: Car[] = [
  {
    id: 'MDL-Y',
    name: 'Model Y',
    image: 'assets/images/cars/model-y.png',
    acceleration: '0-60 mph in 3.5s',
    topSpeed: 'up to 150 mph',
    range1: '300 mi',
    range2: 'Range (EPA est.)',
    motor1: 'AWD',
    motor2: 'Dual Motor',
  },
];

export interface Car {
  id: string;
  name: string;
  image: string;
  acceleration: string;
  topSpeed: string;
  motor1: string;
  motor2: string;
  range1: string;
  range2: string;
}
