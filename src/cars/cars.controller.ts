import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from 'src/cars/interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Controller('cars')
// ValidationPipe was moved to appUseGlobalPipes in main.ts
// @UsePipes(ValidationPipe)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getCars(): Car[] {
    return this.carsService.getCars();
  }

  @Get(':id')
  // for parse path string param to number ParseIntPipe
  // @Param('id', ParseIntPipe) id: number
  getCar(@Param('id', ParseUUIDPipe) id: string): Car {
    return this.carsService.getCar(id);
  }

  @Post()
  // ValidationPipe was moved to appUseGlobalPipes in main.ts
  // @UsePipes(ValidationPipe)
  create(@Body() createCarDto: CreateCarDto): Car {
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ): Car {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string): void {
    return this.carsService.delete(id);
  }
}
