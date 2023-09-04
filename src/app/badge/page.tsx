'use client'
import { Badge, badgeVariants } from '@/components/ui/badge'
import Link from 'next/link'

const FormPage = () => {
    return (
        <main className="flex gap-8 h-full">
            <section className="w-1/2 max-h-full">
                <h1 className="text-4xl mb-2">Badges page</h1>
            </section>
            <section className="w-1/2">
                <Badge>Default</Badge>
                <Link href={'/badge'} className={badgeVariants()}>Default</Link>
                <Badge variant="outline">Outline</Badge>
                <Link href={'/badge'} className={badgeVariants({ variant: 'outline' })}>Outline</Link>
                <Badge variant="secondary">Secondary</Badge>
                <Link href={'/badge'} className={badgeVariants({ variant: 'secondary' })}>Secondary</Link>
                <Badge variant="destructive">Destructive</Badge>
                <Link href={'/badge'} className={badgeVariants({ variant: 'destructive' })}>Destructive</Link>
            </section>
        </main>
    )
}

export default FormPage
