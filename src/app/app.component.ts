import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IOMDBResponse } from './omdbresponse';   
import { OmdbApiService } from './services/omdb-a.service';
import { SearchtitleComponent } from './components/searchtitle/searchtitle.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Movie Finder';
  movieData: IOMDBResponse | undefined;
  errorMessage: any;

  constructor(private _omdbService: OmdbApiService) { }

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
