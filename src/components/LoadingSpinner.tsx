import React from 'react'

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed z-50 top-0 left-0 w-screen h-screen grid place-items-center bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="loader">Loading...</div>
    </div>
  )
}

export default LoadingSpinner
