import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='h-20 bg-red-500 flex p-4 justify-between items-center'>
        <h1>sheryians</h1>
        <div className='flex justify-between items-center gap-6'>
            <Link href="/about">About</Link>
            <Link href="/home">Home</Link>
            <Link href="/services">Services</Link>
        </div>

    </div>
  )
}

export default Nav