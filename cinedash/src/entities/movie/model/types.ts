export type IMovie = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  title: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  softcore: boolean
  video: boolean
  vote_average: number
  vote_count: number
  tagline: string
  genres: IGenre[]
}

export type IMoviesResponse = {
  results: IMovie[]
}

export type IGenre = {
  id: number
  name: string
}

export type IGenresResponse = {
  genres: IGenre[]
}

export type IFilters = {
  year?: string;
  genre?: string;
  rating?: string;
  title?: string;
};

export interface IMovieVideosResponse {
  id: number;
  results: IMovieVideo[];
}

export interface IMovieVideo {
  iso_639_1: string;
  iso_3166_1: string;

  name: string;
  key: string;
  site: string;
  type: string;

  size: number;

  official: boolean;

  published_at: string;

  id: string;
}

export interface IPopularMoviesResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}