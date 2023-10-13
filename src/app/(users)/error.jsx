'use client'
import { HomeModernIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

const error = () => {
  return (
    <div>
     <p>An Error Occured</p>
     <Link href='/'>
      <HomeModernIcon className='w-5' />
      Click Here to go Home </Link>
    </div>
  )
}

export default error
