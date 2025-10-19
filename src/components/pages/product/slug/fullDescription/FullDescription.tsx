"use client"

import React, { useState } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'

interface Props {
    fullDescription: string
}

type TypeText = 'OPEN' | 'CLOSE'

enum Etext {
  OPEN = "Показать полностью",
  CLOSE = 'Скрыть'
}

const FullDescription = ({
    fullDescription
}: Props) => {
  const [text, setText] = useState<TypeText>("OPEN")
  const [isVisible, setIsVisible] = useState(false)

  const funcToggle = () => {
    setText(prev => prev === "CLOSE" ? "OPEN" : "CLOSE")
    setIsVisible(prev => !prev)
  }
  

  return (
    <div className="flex flex-col items-start gap-5 max-w-[700px] pb-9 border-black border-b">
        <div className={clsx(
          styles.desctiption_text,
          isVisible ? 'max-h-[200px]' : 'max-h-[40px]',
        )}>
            <div className="text-sm">{fullDescription}</div>
        </div>
        <button onClick={funcToggle} className="opacity-40 text-xs cursor-pointer border-b">
          {Etext[text]}
        </button>
    </div>
  )
}

export default FullDescription