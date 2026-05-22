import { create } from "zustand";
import type { IMovie } from "../../entities/movie/model/types";
import { persist } from "zustand/middleware";
import { toast } from "sonner";

type IWatchlistStore = {
  watchlist: IMovie[];

  addMovie: (movie: IMovie) => void;

  removeMovie: (movieID: number | undefined) => void;

  isFavorite: (movieID: number | undefined) => boolean;
};
export const useWatchlistStore = create<IWatchlistStore>()(
  persist(
    (set, get) => ({
      watchlist: [],

      addMovie: (movie) =>
        set((state) => {
          toast.success("Filme adicionado à sua lista");
          return {
            watchlist: [...state.watchlist, movie],
          };
        }),

      removeMovie: (movieID) => {
        set((state) => ({
          watchlist: state.watchlist.filter((movie) => movie.id !== movieID),
        }));

        toast.error("Filme removido da sua lista");
      },
      isFavorite: (movieID) =>
        get().watchlist.some((movie) => movie.id === movieID),
    }),
    {
      name: "watchlist-storage",
    },
  ),
);
