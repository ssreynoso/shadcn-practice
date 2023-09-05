import Link from 'next/link'
import { PropsWithChildren } from 'react'

const DataTableLayout = ({ children }: PropsWithChildren) => {
    return (
        <main className="flex gap-8 h-full min-h-[80vh]">
            <section className="w-1/2 max-h-full">
                <h1 className="text-4xl mb-2">Data table page</h1>
                <ul className='[&>*]:underline list-disc ml-5 '>
                    <li><Link href={'/data-table/'}>Demo</Link></li>
                    <li><Link href={'/data-table/formatted-columns'}>Formatted Columns</Link></li>
                    <li><Link href={'/data-table/sorting'}>Sorting</Link></li>
                    <li><Link href={'/data-table/row-actions'}>Row Actions</Link></li>
                    <li><Link href={'/data-table/row-selection'}>Row Selection</Link></li>
                </ul>
            </section>
            <section className="w-1/2 border rounded-lg">{children}</section>
        </main>
    )
}

export default DataTableLayout
