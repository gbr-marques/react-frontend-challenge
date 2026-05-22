import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useWatchlistStore } from "../../stores/watchlist/use-watchlist-store";
import { DetailsPage } from "../../pages/details";

const movieMock = {
  adult: false,
  backdrop_path: "/qO55CD8tgVL1T4WKn6zYFFiD6lL.jpg",
  genres: [
    {
      id: 28,
      name: "Action",
    },
  ],
  id: 1439930,
  title: "The Punisher: One Last Kill",
  original_language: "en",
  original_title: "The Punisher: One Last Kill",
  overview:
    "As Frank Castle searches for meaning beyond revenge, an unexpected force pulls him back into the fight.",
  popularity: 580.0449,
  poster_path: "/qQclTgLMDvGBuUBFGHRipxkEwWR.jpg",
  release_date: "2026-05-12",
  tagline: "One last mission.",
  video: false,
  vote_average: 8.504,
  vote_count: 1008,
};

vi.mock("@tanstack/react-router", async () => {
  const actual = await vi.importActual("@tanstack/react-router");

  return {
    ...actual,
    useParams: () => ({
      id: "1439930",
    }),
  };
});
vi.mock("@/features/movie-details/api/use-movie-details", () => ({
  useMovieDetails: () => ({
    data: movieMock,
    isLoading: false,
    error: null,
    refetch: vi.fn(),
  }),
}));

describe("MovieDetailsPage", () => {
  beforeEach(() => {
    useWatchlistStore.setState({
      watchlist: [],
    });
  });

  it("should add movie to watchlist", async () => {
    const user = userEvent.setup();

    render(<DetailsPage></DetailsPage>);

    const button = screen.getByRole("button", {
      name: /adicionar aos favoritos/i,
    });

    await user.click(button);

    expect(useWatchlistStore.getState().watchlist).toContainEqual(movieMock);
  });
});
