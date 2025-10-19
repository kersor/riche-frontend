import React from 'react'
import styles from './styles.module.css'
import { EnumCharacteristics, ICharacteristics } from '@/types/product'
import util from 'node:util';

interface Props {
    characteristics: ICharacteristics
}

const Characteristics = ({
    characteristics
}: Props) => {
    if (!characteristics || !Object.entries(characteristics).length) return null

    return (
        <div>
            <div>
                {
                    Object.entries(characteristics).map(([key, value]) => {
                        const keyVal = key as keyof typeof EnumCharacteristics
                        let val: string = ''

                        if (keyVal === "id") return null
                        
                        if (keyVal === "shelfLife") {
                            val = `до вскрытия - ${value.beforeOpening}; после вскрытия - ${value.afterOpening}`
                        } else {
                            val = value
                        }

                        return (
                            <div key={key} className='pb-2'>
                                <h3 className='text-sm pb-1 pb-1 pt-0'>
                                    {EnumCharacteristics[keyVal]}:
                                    <span className='text-gray-500 ml-1 font-normal'>{val}</span>
                                </h3>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Characteristics