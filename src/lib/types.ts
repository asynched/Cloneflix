export type MovieType = {
  backdrop_path: string | null
  first_air_date: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  origin_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
  title: string
}

export type CategoryResponseType = {
  slug: string
  title: string
  movies: MovieType[]
}
