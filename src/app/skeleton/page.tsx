'use client'
import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonDemo() {
    return (
        <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-24 w-[600px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    )
}

const FormPage = () => {
    return (
        <main className="flex gap-8 h-full">
            <section className="w-1/2 max-h-full">
                <h1 className="text-4xl mb-2">Avatar page</h1>
            </section>
            <section className="w-1/2">
                <SkeletonDemo />
            </section>
        </main>
    )
}

export default FormPage
