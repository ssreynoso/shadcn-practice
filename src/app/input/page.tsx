'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

function InputDemo() {
    return <Input type="email" placeholder="Email" />
}

function InputFile() {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
        </div>
    )
}

function InputWithButton() {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
        </div>
    )
}

function InputWithLabel() {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
        </div>
    )
}

function InputDisabled() {
    return <Input disabled type="email" placeholder="Email" />
}

const FormPage = () => {
    return (
        <main className="flex gap-8 h-full">
            <section className="w-1/2 max-h-full">
                <h1 className="text-4xl mb-2">Input page</h1>
            </section>
            <section className="w-1/2">
                <InputDemo />
                <InputFile />
                <InputWithLabel />
                <InputDisabled />
                <InputWithButton />
            </section>
        </main>
    )
}

export default FormPage
