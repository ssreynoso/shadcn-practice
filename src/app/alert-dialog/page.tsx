'use client'

import { CodeSection } from '@/components/ui/code-section'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const AlertPage = () => {
    const code = `<AlertDialog>
    <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
        <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account and remove your
                data from our servers.
            </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
    </AlertDialogContent>
</AlertDialog>`

    const [open, setOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        if (e.target.value === 'Juan Cobo') {
            setOpen(true)
        }
    }

    return (
        <main className="flex gap-8 h-full">
            <section className="w-1/2 max-h-full">
                <h1 className="text-4xl mb-2">Alert page</h1>
                <CodeSection code={code} />
            </section>
            <section className="w-1/2">
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline">Show Dialog</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your account and remove your
                                data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel onClick={() => alert('canceled')}>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => alert('acepted')}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                <div className='mt-4'>
                    <input type="text" value={inputValue} onChange={handleInputChange} />
                </div>
                <AlertDialog open={open}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>No podía faltar no?</AlertDialogTitle>
                            <AlertDialogDescription>
                                JAJA SIIIII PUSISTE LA PALABRA CLAVE 
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => setOpen(false)}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </section>
        </main>
    )
}

export default AlertPage
