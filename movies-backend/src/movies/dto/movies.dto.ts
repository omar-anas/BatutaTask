import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class Movie {
    id: number;
    @IsString()
    @IsNotEmpty()
    title: string;
    @IsNumber()
    @IsOptional()
    year: string;
    genre: string;
    director: string;
  }
  