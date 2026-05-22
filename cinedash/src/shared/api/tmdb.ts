export const BASE_URL = 'https://api.themoviedb.org/3'

export async function tmdbFetch<T>(
  endpoint: string,
): Promise<T> {
  const response = await fetch(
    `${BASE_URL}${endpoint}?language=pt-BR`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    },
  )

  if (!response.ok) {
    throw new Error('TMDB request failed')
  }

  return response.json()
}