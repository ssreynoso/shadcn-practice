'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
const ButtonPage = () => {
    return (
        <>
            <div>
                <Button onClick={() => alert('Hola')}>Click</Button>
                {/* <Button variant={'default'}>Click</Button> */}
                <Button variant={'destructive'}>Click</Button>
                <Button variant={'ghost'}>Click</Button>
                <Button variant={'link'}>Click</Button>
                <Button variant={'outline'}>Click</Button>
                <Button variant={'secondary'}>Click</Button>
                <Button className={'bg-warning text-warning-foreground'}>Click</Button>
            </div>


            <div>
                {/* Podemos usar las clases de un componente Button de shadcn en otros componentes que no lo sean */}
                <Link href={'/'} className={buttonVariants()}>Go to home page</Link>
                {/* <Link href={'/'} className={buttonVariants({ variant: 'default' })}>Go to home page</Link> */}
                <Link href={'/'} className={buttonVariants({ variant: 'destructive' })}>Go to home page</Link>
                <Link href={'/'} className={buttonVariants({ variant: 'ghost' })}>Go to home page</Link>
                <Link href={'/'} className={buttonVariants({ variant: 'link' })}>Go to home page</Link>
                <Link href={'/'} className={buttonVariants({ variant: 'outline' })}>Go to home page</Link>
                <Link href={'/'} className={buttonVariants({ variant: 'secondary'})}>Go to home page</Link>
                <Link href={'/'} className={buttonVariants({ className: 'bg-warning text-warning-foreground' })}>Go to home page</Link>
            </div>
        </>
    )
}

export default ButtonPage