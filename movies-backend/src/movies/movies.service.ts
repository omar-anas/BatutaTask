import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Movie } from './dto';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  async create(movie: Movie): Promise<Movie> {
    return this.prisma.movie.create({
      data: movie,
    });
  }

  async findAll(): Promise<Movie[]> {
    return this.prisma.movie.findMany();
  }

  async findOne(id: number): Promise<Movie> {
    return this.prisma.movie.findUnique({
      where: { id },
    });
  }

  async update(id: number, updatedMovie: Movie): Promise<Movie> {
    return this.prisma.movie.update({
      where: { id },
      data: updatedMovie,
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.movie.delete({
      where: { id },
    });
  }
}
