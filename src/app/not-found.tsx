"use client"

import Button from '@/components/ui/shared/button/Button'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function NotFound () {
  const router = useRouter()

  return (
    <div className='max-w-[640px] mx-auto'>
      <div className='mt-[50px] flex flex-col justify-center items-center text-center gap-[0.75rem]'>
        <h1 className='text-2xl font-medium'>Такой страницы не существует на сайте</h1>
        <div className='text-xl'>Попробуйте вернуться назад или поищите что-нибудь в каталоге.</div>
        <Button onClick={() => router.push('/')} fullWidth={false} variant="product">Перейти в каталог</Button>
      </div>
    </div>
  )
}
