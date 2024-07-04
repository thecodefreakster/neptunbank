
'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { sidebarLinks } from '@/constants'

const Sidebar = ({ user }: SiderbarProps ) => {
    const pathName = usePathname();

    return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href='/' className='flex mb-12 cursor-pointer item-center gap-2'>
                <Image 
                    src='/icons/logo.svg' 
                    width={34} 
                    height={34}
                    alt='Neptun logo'
                    className='flex size-[24] max-xl:size-14'
                 />
                 <h1 className='sidebar-logo'>Neptun</h1>
            </Link>
            {sidebarLinks.map((item) => {
                const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)

                return(
                    <Link 
                        href={item.route}
                        key={item.label}
                        className={cn('sidebar-link',  {'bg-bank-gradient': isActive})}
                    >
                        <div className='relative size-6'>
                            <Image 
                                src={item.imgURL}
                                alt={item.label}
                                fill
                                className={cn({
                                    'brightness-[3] invert-0': isActive
                                })}
                            />
                        </div>
                        <p className={cn(
                            'sidebar-label', {'!text-white': isActive}
                        )}>
                            {item.label}
                        </p>
                    </Link>
                )
            })}
            USER
        </nav>

        FOOTER
    </section>
  )
}

export default Sidebar