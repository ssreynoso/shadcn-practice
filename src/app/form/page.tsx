'use client'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
    username: z
        .string()
        .min(2, { message: 'Más de dos plox' })
        .max(50, { message: 'Pero menos de 50 my brother, no flashes' }),
})

const ProfileForm = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        // Se necesita tener "zod": "3.21.4" y @hookform/resolvers en 3.3.0 porque da error de tipos
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Esto es un placeholder" {...field} />
                            </FormControl>
                            <FormDescription>Esta es una descripción del campo</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

const FormPage = () => {
    return (
        <main className="flex gap-8 h-full">
            <section className="w-1/2 max-h-full">
                <h1 className="text-4xl mb-2">Form page</h1>
                <p></p>
            </section>
            <section className="w-1/2">
                <ProfileForm />
            </section>
        </main>
    )
}

export default FormPage
