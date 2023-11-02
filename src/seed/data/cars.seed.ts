import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Supra',
  },
  {
    id: uuid(),
    brand: 'Volkswagen',
    model: 'GTI VI',
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'F-150',
  },
  {
    id: uuid(),
    brand: 'Jeep',
    model: 'Grand Cherokee',
  },
];
