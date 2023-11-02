import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from 'src/interfaces/Car';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getCars(): Car[] {
    return this.carsService.getCars();
  }

  @Get('/:id')
  getCar(@Param('id', ParseIntPipe) id: number): Car {
    return this.carsService.getCar(id);
  }
}
