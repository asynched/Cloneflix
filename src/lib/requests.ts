import api from '@services/api'
import { CategoryResponseType, MovieType } from '@lib/types'

const getMoviesData = async (
  endpoint: string,
  language: string = 'pt-BR'
): Promise<MovieType[]> => {
  const { data } = await api.get(`${endpoint}`, {
    params: {
      language,
      api_key: import.meta.env.VITE_APP_API_KEY,
    },
  })

  return data.results
}

export const getHomepageMovies = async (): Promise<CategoryResponseType[]> => {
  const endpoints = [
    'discover/tv?with_network=213',
    'trending/all/week?',
    'movie/top_rated?',
    'discover/movie?with_genres=28',
    'discover/movie?with_genres=35',
    'discover/movie?with_genres=27',
    'discover/movie?with_genres=10749',
    'discover/movie?with_genres=99',
  ]

  const [
    originals,
    trending,
    topRated,
    action,
    comedy,
    horror,
    romance,
    documentary,
  ] = await Promise.all(endpoints.map(endpoint => getMoviesData(endpoint)))

  return [
    {
      slug: 'originals',
      title: 'Originais do Netflix',
      movies: originals,
    },
    {
      slug: 'trending',
      title: 'Recomendados para você',
      movies: trending,
    },
    {
      slug: 'toprated',
      title: 'Em alta',
      movies: topRated,
    },
    {
      slug: 'action',
      title: 'Ação',
      movies: action,
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      movies: comedy,
    },
    {
      slug: 'horror',
      title: 'Terror',
      movies: horror,
    },
    {
      slug: 'romance',
      title: 'Romance',
      movies: romance,
    },
    {
      slug: 'documentary',
      title: 'Documentários',
      movies: documentary,
    },
  ]
}
