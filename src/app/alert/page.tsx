import { CodeSection } from '@/components/ui/code-section'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { RocketIcon } from '@radix-ui/react-icons'

const AlertPage = () => {
    const code = `<Alert>
    <RocketIcon className="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>You can add components to your app using the cli.</AlertDescription>
</Alert>`
    const code1 = `<Alert variant={'destructive'} className='mt-4'>
    <p>Icon?</p>
    <AlertTitle>Heads up! Destructive Variant</AlertTitle>
    <AlertDescription>You can add components to your app using the cli.</AlertDescription>
</Alert>`

    return (
        <main className="flex gap-8 h-full">
            <section className="w-1/2 max-h-full">
                <h1 className="text-4xl mb-2">Alert page</h1>
                <CodeSection code={code} />
                <CodeSection className={'mt-4'} code={code1} />
            </section>
            <section className="w-1/2">
                <Alert>
                    <RocketIcon className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>You can add components to your app using the cli.</AlertDescription>
                </Alert>
                <Alert variant={'destructive'} className='mt-4'>
                    <p>Icon?</p>
                    <AlertTitle>Heads up! Destructive Variant</AlertTitle>
                    <AlertDescription>You can add components to your app using the cli.</AlertDescription>
                </Alert>
            </section>
        </main>
    )
}

export default AlertPage
