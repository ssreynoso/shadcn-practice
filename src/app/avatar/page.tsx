'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const FormPage = () => {
    return (
        <main className="flex gap-8 h-full">
            <section className="w-1/2 max-h-full">
                <h1 className="text-4xl mb-2">Avatar page</h1>
            </section>
            <section className="w-1/2">
                <p>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </p>
            </section>
        </main>
    )
}

export default FormPage
