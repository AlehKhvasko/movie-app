import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  constructor(private route: ActivatedRoute, private movieService: MoviesService) {}

  movie: Movie | null = null;

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.getMovie(params.id);
    })
  }

  getMovie(id:string){
    this.movieService.getMovie(id).subscribe(movie =>{
       this.movie = movie; 
    })
  }
}
