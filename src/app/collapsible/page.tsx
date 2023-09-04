'use client'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
const FormPage = () => {
    return (
        <main className="flex gap-8 h-full">
            <section className="w-1/2 max-h-full">
                <h1 className="text-4xl mb-2">Collapsible page</h1>
            </section>
            <section className="w-1/2">
                <Collapsible>
                    <CollapsibleTrigger className='border rounded p-4'>Can I use this in my project?</CollapsibleTrigger>
                    <CollapsibleContent className='p-4 fade-in'>
                        Yes. Free to use for personal and commercial projects. No attribution required.
                    </CollapsibleContent>
                </Collapsible>
            </section>
        </main>
    )
}

export default FormPage
