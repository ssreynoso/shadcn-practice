'use client'

import * as React from 'react'

import { Progress } from '@/components/ui/progress'

function ProgressDemo() {
    const [progress, setProgress] = React.useState(13)

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])

    return <Progress value={progress} className="w-[60%]" />
}

const FormPage = () => {
    return (
        <main className="flex gap-8 h-full">
            <section className="w-1/2 max-h-full">
                <h1 className="text-4xl mb-2">Avatar page</h1>
            </section>
            <section className="w-1/2">
                <ProgressDemo />
            </section>
        </main>
    )
}

export default FormPage
