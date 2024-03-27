'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='flex justify-center' >
      <div>
        <h2 className='text-rose-500 text-xl' >Something went wrong!</h2>
        <button
        className='bg-emerald-500 rounded px-4 py-2'
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  )
}