import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'
import MenuLink from '@/components/ui/header/menuLink/MenuLink'
import Button from '@/components/ui/shared/button/Button'

const Header = () => {
  return (
    <header className='fixed w-full z-10 top-0 left-0 flex justify-between items-center px-3 bg-white h-[50px] border-b border-[#F4F4F5]'>
        <Link className={styles.logo} href="/">
            <Image
                className={styles.logo_icon}
                src={'/icons/logo.svg'}
                alt='logo'
                width={15}
                height={15}
            />
            <span className={styles.logo_title}>riche</span>
        </Link>
        <div className={styles.menu}>
            <MenuLink title="Бестселлеры" href="/catalog/bestsellery" />
            <MenuLink title="Новинки" href="/catalog/novinki" />
            <MenuLink title="Лицо" href="/catalog/face" />
            <MenuLink title="Волосы" href="/catalog/hair" />
        </div>

        <div className={styles.actions}>
            <Button variant="link">
                <Image 
                    src={'/icons/locations.svg'}
                    alt='locations'
                    width={12}
                    height={12}
                /> 
                чебоксары
            </Button>
            <Button variant="link">поиск</Button>
            <Button variant="link">профиль</Button>
            <Button variant="link">корзина</Button>
        </div>

    </header>
  )
}

export default Header