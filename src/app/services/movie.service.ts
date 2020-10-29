import {Injectable} from '@angular/core';
import {Movie} from '../models/movie.class';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    public movies: Movie[] = [
        new Movie(1, 'ONE ROOM', 'https://vuighe.net/one-room', 'Yurei'),
        new Movie( 2, 'KIMETSU NO YAIBA', 'https://vuighe.net/video/6982393', ' YamiSora'),
    ];

    constructor() {
    }

    getListMovie = () => {
        return this.movies;
    }

    addMovie = (movie: Movie): void => {
        movie.id = this.getLastId(this.movies) + 1;
        this.movies.push(movie);
        console.log(this.movies);
    }

    getLastId = (movies) => {
        if (this.movies.length > 0){
            movies.sort((a, b) => {
                if (a.id > b.id) {
                    return -1;
                } else if (a.id < b.id) {
                    return 1;
                } else {
                    return 0;
                }
            });
            return  this.movies[0].id;
        }
        else{
            return 0;
        }
    }


}
