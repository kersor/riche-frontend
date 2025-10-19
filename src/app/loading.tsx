import Image from 'next/image'
import React from 'react'

export default function Loading () {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-white z-50">
        <div className="w-full h-full flex justify-center items-center animate-spin">
            <Image
                src='/icons/loader.svg'
                alt="loader"
                width={40}
                height={40}
            />
        </div>
    </div>
  )
}