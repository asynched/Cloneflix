import React from 'react'
import { MovieType } from '@lib/types'

type MainMovieProps = {
  movie: MovieType
}

const MainMovie: React.FC<MainMovieProps> = ({ movie }) => {
  return (
    <section
      className="-mb-32 w-full h-screen bg-center bg-cover"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
      }}
    >
      <div className="w-full h-full bg-gradient-to-r from-backdrop to-transparent">
        <div className="p-8 w-full h-full flex flex-col justify-center bg-gradient-to-t from-backdrop to-transparent">
          <h1 className="mb-6 text-6xl font-bold tracking-tighter">
            {movie.name}
          </h1>
          <div className="mb-2 flex items-center gap-3 text-lg font-bold">
            <span className="text-green-500">{movie.vote_average} pontos</span>
            <span>{movie.first_air_date.split('-')[0]}</span>
            <span>{Math.floor(Math.random() * 8)} temporadas</span>
          </div>
          <div className="mb-6 text-gray-300 text-lg font-medium md:w-1/2">
            <p>{movie.overview}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className={`
              bg-white
              py-3
              w-40
              font-bold
              text-lg
              text-backdrop
              rounded
              shadow-xl
              transition
              hover:bg-opacity-80
            `}
            >
              Assistir
            </button>
            <button
              className={`
                w-40
                bg-backdrop-light
                py-3
                font-bold
                text-lg
                rounded
                shadow-xl
                transition
                hover:bg-opacity-80
              `}
            >
              Minha lista
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainMovie
