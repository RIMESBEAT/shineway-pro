'use client'
import Link from 'next/link'
import React from 'react'

const error = () => {
  return (
    <div>
     <p>An Error Occured</p>
     <Link href='/'>Click Here to go Home </Link>
    </div>
  )
}

export default error
