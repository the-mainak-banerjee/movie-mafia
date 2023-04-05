import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header>
        <div>
            <h2>Movie Mafia</h2>
            <div>
                <input type='text' placeholder='Search Movie'/>
            </div>
            <Link href='/reviews' legacyBehavior>
                <a>
                    All Reviews
                </a>
            </Link>
        </div>
    </header>
  )
}

export default Navbar