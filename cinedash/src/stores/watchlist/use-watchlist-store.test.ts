import { describe, expect, it } from "vitest";
import { useWatchlistStore } from "./use-watchlist-store";
import { genres } from "../../shared/model/genres";

describe("watchlist store", () => {
  it("should add a movie to watchlist", () => {
    const movie = {
      adult: false,
      backdrop_path: "/qO55CD8tgVL1T4WKn6zYFFiD6lL.jpg",
      genre_ids: [28, 18, 80],
      id: 1439930,
      title: "The Punisher: One Last Kill",
      original_language: "en",
      original_title: "The Punisher: One Last Kill",
      overview:
        "As Frank Castle searches for meaning beyond revenge, an unexpected force pulls him back into the fight.",
      popularity: 580.0449,
      poster_path: "/qQclTgLMDvGBuUBFGHRipxkEwWR.jpg",
      release_date: "2026-05-12",
      softcore: false,
      video: false,
      vote_average: 8.504,
      vote_count: 1008,
      tagline: "Exemplo de tagline",
    
    }

    useWatchlistStore.getState().addMovie(movie);

    expect(useWatchlistStore.getState().watchlist).toContainEqual(movie);
  });
});
