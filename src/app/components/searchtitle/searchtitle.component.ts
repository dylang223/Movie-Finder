import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OmdbApiService } from '../../services/omdb-a.service';
import { IOMDBResponse } from '../../omdbresponse';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-searchtitle',
  imports: [CommonModule],
  templateUrl: './searchtitle.component.html',
  styleUrl: './searchtitle.component.css'
})
export class SearchtitleComponent {
  movieData: IOMDBResponse | undefined;
  errorMessage: any;
  constructor(private _omdbService: OmdbApiService) {}
    
  
  getMovieDetails(movieName: string): boolean {
    this._omdbService.getMovieData(movieName).subscribe(
        movieData => {
            this.movieData = movieData;
            console.log("Director name : " + this.movieData.Director);
        }
    )
    return false;
}
}


