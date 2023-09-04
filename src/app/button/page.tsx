'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { ChevronRightIcon, EnvelopeOpenIcon, ReloadIcon } from '@radix-ui/react-icons'
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
                {/* Icon */}
                <Button variant="outline" size="icon">
                    <ChevronRightIcon className="h-4 w-4" />
                </Button>
                {/* With icon */}
                <Button>
                    <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
                </Button>
                <Button disabled>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                </Button>
                <Button asChild>
                    <Link href="/login">Login</Link>
                </Button>
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
                <Link href={'/'} className={buttonVariants({ variant: 'outline', size: 'icon' })}>
                    <ChevronRightIcon className="h-4 w-4" />
                </Link>
                <Link href={'/'} className={buttonVariants({ variant: 'outline' })}>
                    <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
                </Link>
                <Link href={'/'} className={buttonVariants()}>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                </Link>
            </div>
        </>
    )
}

export default ButtonPage