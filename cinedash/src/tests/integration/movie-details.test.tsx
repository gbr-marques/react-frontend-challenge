import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useWatchlistStore } from "../../stores/watchlist/use-watchlist-store";
import { DetailsPage } from "../../pages/details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const movieMock = {
  adult: false,
  backdrop_path: "/qO55CD8tgVL1T4WKn6zYFFiD6lL.jpg",
  belongs_to_collection: null,
  budget: 0,
  genres: [
    {
      id: 28,
      name: "Ação",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 80,
      name: "Crime",
    },
  ],
  homepage: "",
  id: 1439930,
  imdb_id: "tt36042156",
  origin_country: ["US"],
  original_language: "en",
  original_title: "The Punisher: One Last Kill",
  overview:
    "Enquanto Frank Castle busca um significado além da vingança, uma força inesperada o arrasta de volta para a luta.",
  popularity: 580.0449,
  poster_path: "/ppRmgI2MbEOADvKKvlNoRJHPXOT.jpg",
  production_companies: [
    {
      id: 420,
      logo_path: "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
      name: "Marvel Studios",
      origin_country: "US",
    },
    {
      id: 176762,
      logo_path: null,
      name: "Kevin Feige Productions",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2026-05-12",
  revenue: 0,
  runtime: 51,
  softcore: false,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "Para encontrar a paz, ele deve perdê-la.",
  title: "O Justiceiro: Uma Última Morte",
  video: false,
  vote_average: 8.501,
  vote_count: 1004,
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

    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <DetailsPage />
      </QueryClientProvider>,
    );

    const button = await screen.findByText(/adicionar aos favoritos/i);

    await user.click(button);

    expect(useWatchlistStore.getState().watchlist).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: movieMock.id,
          title: movieMock.title,
        }),
      ]),
    );
  });
});
