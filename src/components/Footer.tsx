import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="py-4 px-8 bg-black flex justify-between items-center">
      <div className="flex flex-col">
        <h1 className="mb-2 text-4xl font-bold tracking-tighter text-theme-red">
          Nxrth-x
        </h1>
        <a
          className="transition hover:text-theme-red"
          href="https://github.com/Nxrth-x"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="transition hover:text-theme-red"
          href="https://linkedin.com/in/lima-eder"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
      <div className="self-end flex flex-col items-end">
        <p>
          Direitos de imagem{' '}
          <a
            className="transition hover:text-theme-red"
            href="https://netflix.com"
            target="_blank"
          >
            Netflix
          </a>
        </p>
        <p>
          Dados por{' '}
          <a
            className="transition hover:text-theme-red"
            href="https://netflix.com"
            target="_blank"
          >
            TMDB
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
