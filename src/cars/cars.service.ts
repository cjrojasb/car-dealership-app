import { Injectable } from '@nestjs/common';
import { Car } from 'src/interfaces/Car';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Supra',
    },
    {
      id: 2,
      brand: 'Volkswagen',
      model: 'GTI VI',
    },
    {
      id: 3,
      brand: 'Ford',
      model: 'F-150',
    },
    {
      id: 4,
      brand: 'Jeep',
      model: 'Grand Cherokee',
    },
  ];

  // by default method without decorator private is public
  getCars(): Car[] {
    return this.cars;
  }

  getCar(id: number): Car {
    return this.cars.find((car) => car.id === id);
  }
}
