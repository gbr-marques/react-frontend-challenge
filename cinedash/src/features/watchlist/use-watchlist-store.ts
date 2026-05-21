import type { IMovie } from "../../entities/movie/model/types"

type WatchlistStore = {
    watchlist: IMovie[]

    addMovie: (movie: IMovie) => void

    removeMovie: (movieID: number) => void

    isFavorite: (movieID: number) => void
}