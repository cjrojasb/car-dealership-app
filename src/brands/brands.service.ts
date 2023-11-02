import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from './dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    const newBrand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
    };

    this.brands.push(newBrand);

    return newBrand;
  }

  findAll() {
    const brands = this.brands;

    return brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);

    if (!brand) throw new NotFoundException(`Brand with ID: ${id} not found.`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let foundBrand = this.findOne(id);

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        foundBrand = {
          ...foundBrand,
          ...updateBrandDto,
          updatedAt: new Date().getTime(),
        };

        return foundBrand;
      }
      return brand;
    });

    return foundBrand;
  }

  remove(id: string) {
    this.findOne(id);
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
