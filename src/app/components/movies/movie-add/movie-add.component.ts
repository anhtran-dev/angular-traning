import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../../services/movie.service';
import {Movie} from '../../../models/movie.class';

@Component({
    selector: 'app-movie-add',
    templateUrl: './movie-add.component.html',
    styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
    public name: string;
    public link: string;
    public author: string;

    constructor(
            private movieService: MovieService
    ) {
    }

    ngOnInit(): void {
    }

    addMovie = (): void => {
        const movie = new Movie(null, this.name, this.link, this.author);
        this.movieService.addMovie(movie);
    }

}
