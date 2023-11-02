import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private carsService: CarsService,
    private brandsService: BrandsService,
  ) {}
  async runSeed() {
    await this.carsService.fillCarsWithSeedData(CARS_SEED);
    await this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);

    return 'Seed execute successfully';
  }
}
