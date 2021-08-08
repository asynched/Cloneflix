import React, { useState } from 'react'
import { CategoryResponseType } from '@lib/types'

type MovieListProps = {
  category: CategoryResponseType
}

const MovieList: React.FC<MovieListProps> = ({ category }) => {
  const [scrollX, setScrollX] = useState(0)

  const handleLeftArrowClick = () => {
    const x = scrollX + Math.round(window.innerWidth / 2)
    setScrollX(x > 0 ? 0 : x)
  }

  const handleRightArrowClick = () => {
    const x = scrollX - Math.round(window.innerWidth / 2)
    const LIST_WIDTH = 20 * 160

    setScrollX(
      window.innerWidth - LIST_WIDTH > x
        ? window.innerWidth - LIST_WIDTH - 48
        : x
    )
  }

  return (
    <section className="pb-4 overflow-hidden" key={category.slug}>
      <h1 className="mx-8 text-2xl font-bold mb-4">{category.title}</h1>
      <div className="relative">
        <button
          className="absolute z-10 h-full w-12 left-0 bg-black bg-opacity-75 text-4xl font-semibold rounded-r transition duration-500 md:opacity-0 hover:opacity-100"
          onClick={handleLeftArrowClick}
        >
          &lsaquo;
        </button>
        <button
          className="absolute z-10 h-full w-12 right-0 bg-black bg-opacity-75 text-4xl font-semibold rounded-l transition duration-500 md:opacity-0 hover:opacity-100"
          onClick={handleRightArrowClick}
        >
          &rsaquo;
        </button>
        <div
          className={`
            pl-8
            relative
            flex
            w-[3200px]
            transition-all
            duration-500
          `}
          style={{
            marginLeft: scrollX,
          }}
        >
          {category.movies.map(movie => (
            <div
              key={movie.id}
              className={`
              w-40
              cursor-pointer
              transform
              transition
              duration-300
              scale-90
              hover:scale-100
              `}
            >
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title || movie.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MovieList
