import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OmdbService {
  private apiKey: string;

  constructor(private  httpService: HttpService, private configService: ConfigService) {
    this.apiKey = this.configService.get<string>('OMDB_API_KEY');
  }

  async getMovieDetails(query: string): Promise<any> {
    const url = `http://www.omdbapi.com/?s=${query}&apikey=${this.apiKey}`;
    const response = await this.httpService.get(url).toPromise();
    return response.data;
  }
}
