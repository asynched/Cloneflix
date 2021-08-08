import React, { useEffect, useState } from 'react'

import NetflixLogo from '@assets/images/netflix-logo.svg'
import AvatarIcon from '@assets/images/avatar.png'

const Header: React.FC = () => {
  const [scroll, setScroll] = useState(0)

  const handleScrollChange = () => {
    setScroll(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollChange)

    return () => {
      window.removeEventListener('scroll', handleScrollChange)
    }
  }, [scroll])
  return (
    <header
      className={`
        z-20
        fixed
        top-0
        left-0
        px-8
        py-4
        w-full
        flex
        justify-between
        transition
        duration-300
        ${scroll > 192 ? 'bg-backdrop' : 'bg-transparent'}
      `}
    >
      <img src={NetflixLogo} alt="Netflix" className="w-24" />
      <img src={AvatarIcon} alt="You" className="w-10 rounded" />
    </header>
  )
}

export default Header
