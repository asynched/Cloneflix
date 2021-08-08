import React, { useEffect, Reducer, useReducer } from 'react'

import { getHomepageMovies } from '@lib/requests'
import { CategoryResponseType, MovieType } from '@lib/types'
import { ActionType } from '@helpers/types'
import { getRandomElement } from '@helpers/arrays'

import MainMovie from '@components/MainMovie'
import MovieList from '@components/MovieList'
import Header from '@components/Header'
import Footer from '@components/Footer'
import LoadingSpinner from '@components/LoadingSpinner'

type ApplicationStateType = {
  categories: CategoryResponseType[]
  displayMovie: null | MovieType
  loading: boolean
}

const INITIAL_STATE: ApplicationStateType = {
  categories: [],
  displayMovie: null,
  loading: true,
}

const reducer: Reducer<ApplicationStateType, ActionType> = (state, action) => {
  switch (action.type) {
    case 'set/categories':
      return { ...state, categories: action.payload, loading: false }
    case 'set/displayMovie':
      return { ...state, displayMovie: action.payload }
    default:
      throw new Error(`Action type '${action.type}' is not defined`)
  }
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const { loading, categories, displayMovie } = state

  useEffect(() => {
    const fetchMoviesData = async () => {
      const data = await getHomepageMovies()

      const [netflix] = data
      const selectedMovie = getRandomElement(netflix.movies)

      dispatch({ type: 'set/displayMovie', payload: selectedMovie })
      dispatch({ type: 'set/categories', payload: data })
    }

    fetchMoviesData()
  }, [])

  return (
    <div className="w-full min-h-screen bg-backdrop text-white">
      {loading && <LoadingSpinner />}
      <Header />
      {displayMovie && <MainMovie movie={displayMovie} />}
      {categories.map(category => (
        <MovieList category={category} key={category.slug} />
      ))}
      <Footer />
    </div>
  )
}

export default App
