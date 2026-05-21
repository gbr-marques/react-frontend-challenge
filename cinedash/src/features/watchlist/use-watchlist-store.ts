import { create } from "zustand";
import type { IMovie } from "../../entities/movie/model/types";
import { persist } from "zustand/middleware";

type IWatchlistStore = {
  watchlist: IMovie[];

  addMovie: (movie: IMovie) => void;

  removeMovie: (movieID: number) => void;

  isFavorite: (movieID: number | undefined) => void;
};

export const useWatchlistStore = create<IWatchlistStore>()(
  persist(
    (set, get) => ({
      watchlist: [],

      addMovie: (movie) =>
        set((state) => ({
          watchlist: [...state.watchlist, movie],
        })),

      removeMovie: (movieID) =>
        set((state) => ({
          watchlist: state.watchlist.filter((movie) => movie.id === movieID),
        })),

      isFavorite: (movieID) =>
        get().watchlist.some((movie) => movie.id === movieID),
    }),
    {
      name: "watchlist-storage",
    },
  ),
);
