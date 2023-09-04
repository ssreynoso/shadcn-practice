'use client'
import Image from 'next/image'

import { AspectRatio } from '@/components/ui/aspect-ratio'

const FormPage = () => {
    return (
        <main className="flex gap-8 h-full">
            <section className="w-1/2 max-h-full">
                <h1 className="text-4xl mb-2">Aspect ratio page</h1>
                <p>No se, ni idea que onda este comp</p>
            </section>
            <section className="w-1/2">
                <AspectRatio ratio={16 / 9}>
                    <Image
                        src       = "/assets/images/solo-uno-harry-potter.gif"
                        width     = {200}
                        height    = {200}
                        alt       = "Image"
                        className = "rounded-md object-cover"
                    />
                </AspectRatio>
            </section>
        </main>
    )
}

export default FormPage
