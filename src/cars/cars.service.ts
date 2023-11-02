import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
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

  // by default method without decorator private is public
  getCars(): Car[] {
    return this.cars;
  }

  getCar(id: string): Car {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with ID: ${id} not found.`);

    return car;
  }

  create(createCarDto: CreateCarDto): Car {
    const { model } = createCarDto;
    const carModelFieldExist = this.cars.some((car) => car.model === model);

    if (carModelFieldExist)
      throw new NotFoundException('The car with those fields already exists');

    const newCar: Car = { ...createCarDto, id: uuid() };
    this.cars.push(newCar);

    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto): Car {
    let foundCar = this.getCar(id);

    this.cars = this.cars.map((carMap) => {
      if (carMap.id === id) {
        foundCar = {
          ...foundCar,
          ...updateCarDto,
          id,
        };

        return foundCar;
      }

      return carMap;
    });

    return foundCar;
  }

  delete(id: string): void {
    this.getCar(id);

    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
