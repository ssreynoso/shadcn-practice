'use client'
import { cn } from '@/lib/utils'
import { Slider } from '@/components/ui/slider'

type SliderProps = React.ComponentProps<typeof Slider>

function SliderDemo({ className, ...props }: SliderProps) {
    return (
        <Slider
            defaultValue = { [50] }
            max          = { 100 }
            step         = { 1 }
            className    = { cn('w-[60%]', className) }
            {...props}
        />
    )
}

const SliderPage = () => {
    return (
        <main className="flex gap-8 h-full">
            <section className="w-1/2 max-h-full">
                <h1 className="text-4xl mb-2">Avatar page</h1>
            </section>
            <section className="w-1/2">
                <SliderDemo />
            </section>
        </main>
    )
}

export default SliderPage
