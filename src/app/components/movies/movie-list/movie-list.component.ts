import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../../services/movie.service';
import {Movie} from '../../../models/movie.class';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
    public listMovies: Movie[] = [];
    constructor(
            private movieService: MovieService
    ) {
    }

    ngOnInit(): void {
        this.listMovies = this.movieService.getListMovie();
        console.log(this.listMovies);
    }

}
