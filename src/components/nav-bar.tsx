'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { ModeToggle } from '@/components/dark-mode-toggle-button'
import { cn } from '@/lib/utils'
import { ChangeTheme } from './change-theme'

const NavBarItem = (props: { value: string, label: string }) => {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [selected, setSelected] = useState(false)

    useEffect(() => {
        setSelected(pathname.includes(props.value))
    }, [pathname, searchParams])

    const navbar_class = cn(
        'cursor-pointer p-1 relative min-w-max',
        'after:transition-all after:h-[1px] after:bg-red-300 after:absolute after:bottom-0',
        'hover:after:left-0 hover:after:w-full',
        selected ? 'after:left-0 after:w-full' : 'after:w-[0px] after:left-1/2'
    )

    return (
        <li key={props.value} className={navbar_class}>
            <Link href={`/${props.value}`}>{props.label}</Link>
        </li>
    )
}

export const NavBar = () => {
    const navList = useRef<HTMLUListElement>(null)
    const navBarRef = useRef<HTMLElement>(null)

    const elements = [
        { value: 'accordion',       label: 'Accordion'       },
        { value: 'alert',           label: 'Alert'           },
        { value: 'alert-dialog',    label: 'Alert Dialog'    },
        { value: 'aspect-ratio',    label: 'Aspect Ratio'    },
        { value: 'avatar',          label: 'Avatar'          },
        { value: 'badge',           label: 'Badge'           },
        { value: 'button',          label: 'Button'          },
        { value: 'calendar',        label: 'Calendar'        },
        { value: 'card',            label: 'Card'            },
        { value: 'checkbox',        label: 'CheckBox'        },
        { value: 'collapsible',     label: 'Collapsible'     },
        { value: 'combobox',        label: 'ComboBox'        },
        { value: 'command',         label: 'Command'         },
        { value: 'context-menu',    label: 'Context Menu'    },
        { value: 'data-table',      label: 'Data Table'      },
        { value: 'date-picker',     label: 'Date Picker'     },
        { value: 'dialog',          label: 'Dialog'          },
        { value: 'dropdown-menu',   label: 'Dropdown Menu'   },
        { value: 'form',            label: 'Form'            },
        { value: 'hover-card',      label: 'Hover Card'      },
        { value: 'input',           label: 'Input'           },
        { value: 'label',           label: 'Label'           },
        { value: 'menubar',         label: 'Menubar'         },
        { value: 'navigation-menu', label: 'Navigation Menu' },
        { value: 'popover',         label: 'Popover'         },
        { value: 'progress',        label: 'Progress'        },
        { value: 'radio-group',     label: 'Radio Group'     },
        { value: 'scroll-area',     label: 'Scroll Area'     },
        { value: 'select',          label: 'Select'          },
        { value: 'separator',       label: 'Separator'       },
        { value: 'sheet',           label: 'Sheet'           },
        { value: 'skeleton',        label: 'Skeleton'        },
        { value: 'slider',          label: 'Slider'          },
        { value: 'switch',          label: 'Switch'          },
        { value: 'table',           label: 'Table'           },
        { value: 'tabs',            label: 'Tabs'            },
        { value: 'textarea',        label: 'Textarea'        },
        { value: 'toast',           label: 'Toast'           },
        { value: 'toggle',          label: 'Toggle'          },
        { value: 'tooltip',         label: 'Tooltip'         },
    ]
    
    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            event.preventDefault()
            const scrollAmount = event.deltaY * 2
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
                className='max-w-[65%] flex gap-3 p-2 overflow-x-auto pretty-scrollbar-x scroll-smooth'
            >
                {elements.map(el => (
                    <NavBarItem key={el.value} value={el.value} label={el.label} />
                ))}
            </ul>
            <div className='flex gap-2'>
                <ModeToggle />
                <ChangeTheme />
            </div>
        </nav>
    )
}
