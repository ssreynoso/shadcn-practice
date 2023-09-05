'use client'
import { Bold, Italic, Underline } from 'lucide-react'
import { Toggle } from '@/components/ui/toggle'

function ToggleDemo() {
    return (
        <Toggle aria-label="Toggle italic">
            <Bold className="h-4 w-4" />
        </Toggle>
    )
}

function ToggleOutline() {
    return (
        <Toggle variant="outline" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
        </Toggle>
    )
}

function ToggleWithText() {
    return (
        <Toggle aria-label="Toggle italic">
            <Italic className="mr-2 h-4 w-4" />
            Italic
        </Toggle>
    )
}

function ToggleSm() {
    return (
        <Toggle size="sm" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
        </Toggle>
    )
}

function ToggleLg() {
    return (
        <Toggle size="lg" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
        </Toggle>
    )
}

function ToggleDisabled() {
    return (
        <Toggle aria-label="Toggle italic" disabled>
            <Underline className="h-4 w-4" />
        </Toggle>
    )
}

const FormPage = () => {
    return (
        <main className="flex gap-8 h-full">
            <section className="w-1/2 max-h-full">
                <h1 className="text-4xl mb-2">Toggle page</h1>
            </section>
            <section className="w-1/2">
                <ToggleDemo />
                <ToggleOutline />
                <ToggleWithText />
                <ToggleSm />
                <ToggleLg />
                <ToggleDisabled />
            </section>
        </main>
    )
}

export default FormPage
