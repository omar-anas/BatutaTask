import { Controller, Post, Get, Param, Body, Delete, Put } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { OmdbService } from '../omdb/omdb.service';
import { Movie } from '@prisma/client';

@Controller('movies')
export class MoviesController {
  constructor(
    private readonly moviesService: MoviesService,
    private readonly omdbService: OmdbService
  ) {}

  // Search movie by query
  @Post('search')
  async searchMovie(@Body('query') query: string): Promise<any> {
    return this.omdbService.getMovieDetails(query);
  }

  // Add movie to favorites
  @Post()
  async create(@Body() movie: Movie): Promise<Movie> {
    return this.moviesService.create(movie);
  }

  // Get all favorite movies
  @Get()
  async findAll(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }

  // Get a single favorite movie
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Movie> {
    return this.moviesService.findOne(id);
  }

  // Update a favorite movie
  @Put(':id')
  async update(@Param('id') id: number, @Body() updatedMovie: Movie): Promise<Movie> {
    return this.moviesService.update(id, updatedMovie);
  }

  // Delete a favorite movie
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.moviesService.remove(id);
  }
}
