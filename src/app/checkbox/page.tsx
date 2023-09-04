'use client'
import { Checkbox } from '@/components/ui/checkbox'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { toast } from '@/components/ui/use-toast'
import Link from 'next/link'

const FormSchema = z.object({
    mobile: z.boolean().default(false).optional(),
})

export function CheckboxReactHookFormSingle() {
    type FormSchemaType = z.infer<typeof FormSchema>
    const form = useForm<FormSchemaType>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            mobile: true,
        },
    })

    function onSubmit(data: FormSchemaType) {
        toast({ title: 'hola' })
        console.log('on submit')
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                            <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>Use different settings for my mobile devices</FormLabel>
                                <FormDescription>
                                    You can manage your mobile notifications in the{' '}
                                    <Link href="/examples/forms">mobile settings</Link> page.
                                </FormDescription>
                            </div>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
const items = [
    { id: 'recents', label: 'Recents' },
    { id: 'home', label: 'Home' },
    { id: 'applications', label: 'Applications' },
    { id: 'desktop', label: 'Desktop' },
    { id: 'downloads', label: 'Downloads' },
    { id: 'documents', label: 'Documents' },
] as const

const FormSchema2 = z.object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: 'You have to select at least one item.',
    }),
})

function CheckboxReactHookFormMultiple() {
    const form = useForm<z.infer<typeof FormSchema2>>({
        resolver: zodResolver(FormSchema2),
        defaultValues: {
            items: ['recents', 'home'],
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema2>) {
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="items"
                    render={() => (
                        <FormItem>
                            <div className="mb-4">
                                <FormLabel className="text-base">Sidebar</FormLabel>
                                <FormDescription>Select the items you want to display in the sidebar.</FormDescription>
                            </div>
                            {items.map((item) => (
                                <FormField
                                    key={item.id}
                                    control={form.control}
                                    name="items"
                                    render={({ field }) => {
                                        return (
                                            <FormItem
                                                key={item.id}
                                                className="flex flex-row items-start space-x-3 space-y-0"
                                            >
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value?.includes(item.id)}
                                                        onCheckedChange={(checked) => {
                                                            return checked
                                                                ? field.onChange([...field.value, item.id])
                                                                : field.onChange(
                                                                    field.value?.filter((value) => value !== item.id)
                                                                )
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormLabel className="text-sm font-normal">{item.label}</FormLabel>
                                            </FormItem>
                                        )
                                    }}
                                />
                            ))}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

function CheckboxWithText() {
    return (
        <div className="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
                <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Accept terms and conditions
                </label>
                <p className="text-sm text-muted-foreground">You agree to our Terms of Service and Privacy Policy.</p>
            </div>
        </div>
    )
}

function CheckboxDisabled() {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox id="terms2" disabled />
            <label
                htmlFor="terms2"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Accept terms and conditions
            </label>
        </div>
    )
}

const FormPage = () => {
    return (
        <main className="flex gap-8 h-full">
            <section className="w-1/2 max-h-full">
                <h1 className="text-4xl mb-2">Checkbox page</h1>
            </section>
            <section className="w-1/2">
                <Checkbox />
                <CheckboxWithText />
                <CheckboxDisabled />
                <CheckboxReactHookFormSingle />
                <CheckboxReactHookFormMultiple />
            </section>
        </main>
    )
}

export default FormPage
