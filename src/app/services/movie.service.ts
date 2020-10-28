import {Injectable} from '@angular/core';
import {Movie} from '../models/movie.class';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    public movies: Movie[] = [
        new Movie(
                1, 'Lol', 'abc.com', 'zzz'
        )
    ];

    constructor() {
    }
    getListMovie = () => {
      return this.movies;
    }
}
