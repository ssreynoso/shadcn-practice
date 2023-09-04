'use client'

import { Button } from '@/components/ui/button'
import { ToastAction } from '@/components/ui/toast'
// import { toast } from '@/components/ui/use-toast'
import { useToast } from '@/components/ui/use-toast'

const FormPage = () => {
    const { toast } = useToast()

    return (
        <main className="flex gap-8 h-full">
            <section className="w-1/2 max-h-full">
                <h1 className="text-4xl mb-2">Avatar page</h1>
            </section>
            <section className="w-1/2">
                <Button
                    onClick={() => {
                        toast({
                            title: 'Scheduled: Catch up',
                            description: 'Friday, February 10, 2023 at 5:57 PM',
                        })
                    }}
                >
                    Show Toast
                </Button>
                <Button
                    variant="outline"
                    onClick={() => {
                        toast({
                            title: 'Uh oh! Something went wrong.',
                            description: 'There was a problem with your request.',
                            action: <ToastAction altText="Try again" onClick={() => alert('Accion?')}>Try again</ToastAction>,
                        })
                    }}
                >
                    Show Toast
                </Button>
                <Button
                    variant="outline"
                    onClick={() => {
                        toast({
                            variant: 'destructive',
                            title: 'Uh oh! Something went wrong.',
                            description: 'There was a problem with your request.',
                            action: <ToastAction altText="Try again" onClick={() => alert('Accion?')}>Try again</ToastAction>,
                        })
                    }}
                >
                    Destructive
                </Button>
            </section>
        </main>
    )
}

export default FormPage
