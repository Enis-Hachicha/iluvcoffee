import { IsString } from 'class-validator';
export class CreateCoffeeDto {
  @IsString() //the @IsString decorator will validate if our data is a string or not
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors: string[];
}
