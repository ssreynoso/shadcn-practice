import { CodeSection } from '@/components/ui/code-section'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Image from 'next/image'

const HarryPotterMeme = () => {
    return (
        <Image
            src={'/assets/images/solo-uno-harry-potter.gif'}
            alt="Solo uno Harry Potter"
            width={300}
            height={400}
        />
    )
}

const AccordionPage = () => {
    const code = `    keyframes: {
        "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: 0 },
        },
    },
    animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
    }`

    return (
        <main className="flex gap-8 h-full">
            <section className="w-1/2 max-h-full">
                <h1 className="text-4xl mb-2">Accordion page</h1>
                <h3 className="text-xl mb-4 leading-8">
                    To use this component, whe need to add the following code in the{' '}
                    <kbd className="bg-white bg-opacity-20 p-1 rounded">tailwind.config.js</kbd> file
                </h3>
                <CodeSection code={code} />
            </section>
            <section className="w-1/2">
                <Accordion type="single">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Single value</AccordionTrigger>
                        <AccordionContent>Without collapsible prop. You can not collapse this jeje</AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className='w-1/2 truncate'>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>I have the prop collapsible je. Trust me</AccordionTrigger>
                        <AccordionContent>I said you could trust me 😉</AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Item 1</AccordionTrigger>
                        <AccordionContent>
                            <HarryPotterMeme />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Item 2</AccordionTrigger>
                        <AccordionContent>
                            <HarryPotterMeme />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Item 3</AccordionTrigger>
                        <AccordionContent>
                            <HarryPotterMeme />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </main>
    )
}

export default AccordionPage
