import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car, CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent {
  car: Car | undefined = undefined;

  constructor(
    private router: ActivatedRoute,
    private carsService: CarsService
  ) {}

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    if (id) {
      this.carsService.getCarById(id).subscribe((car) => (this.car = car));
    }
  }
}
