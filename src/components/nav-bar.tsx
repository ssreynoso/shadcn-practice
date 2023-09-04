'use client'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { ModeToggle } from '@/components/dark-mode-toggle-button'

export const NavBar = () => {
    const navList = useRef<HTMLUListElement>(null)
    const navBarRef = useRef<HTMLElement>(null)

    const elements = [
        { value: 'accordion',    label: 'Accordion'    },
        { value: 'alert',        label: 'Alert'        },
        { value: 'alert-dialog', label: 'Alert Dialog' },
        { value: 'aspect-ratio', label: 'Aspect Ratio' },
        { value: 'avatar',       label: 'Avatar'       },
        { value: 'badge',        label: 'Badge'        },
        { value: 'button',       label: 'Button'       },
        { value: 'calendar',     label: 'Calendar'     },
        { value: 'card',         label: 'Card'         },
        { value: 'checkbox',     label: 'CheckBox'     },
        { value: 'collapsible',  label: 'Collapsible'  },
        { value: 'combobox',     label: 'ComboBox'     },
        { value: 'command',      label: 'Command'     },
        { value: 'form',         label: 'Form'         },
        { value: 'toast',        label: 'Toast'        },
    ]

    const navbar_class = `cursor-pointer p-1 relative min-w-max
        after:transition-all after:w-[0px] after:h-[1px] after:bg-red-300 after:absolute after:bottom-0 after:left-1/2
        hover:after:left-0 hover:after:w-full`
    
    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            event.preventDefault()
            const scrollAmount = event.deltaY
            if (navList.current) {
                navList.current.scrollLeft += scrollAmount
            }
        }

        if (navBarRef.current) {
            navBarRef.current.addEventListener('wheel', handleWheel, { passive: false })
        }

        return (() => {
            if (navBarRef.current) {
                navBarRef.current.removeEventListener('wheel', handleWheel)
            }
        })
    }, [navBarRef.current])

    return (
        <nav
            ref={navBarRef}
            className='h-14 w-full max-w-screen-lg mx-auto flex items-center justify-between'
        >
            <div className='h-full flex items-center pb-1'>
                <Link className='underline underline-offset-8' href={'/'}>Home</Link>
            </div>
            <ul
                ref={navList}
                className='max-w-screen-md flex gap-3 p-2 overflow-x-auto pretty-scrollbar-x scroll-smooth'
            >
                {elements.map(el => (
                    <li key={el.value} className={navbar_class}>
                        <Link href={`/${el.value}`}>{el.label}</Link>
                    </li>
                ))}
            </ul>
            <ModeToggle />
        </nav>
    )
}
