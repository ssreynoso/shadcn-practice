'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Payment } from '../columns'
import { cn } from '@/lib/utils'

const status: ColumnDef<Payment> = {
    accessorKey: 'status',
    header: () => <div className="text-left">Status</div>,
    cell: ({ row }) => {
        const value = row.getValue('status') as Payment['status']
        return <div className={cn(
            'text-left font-medium',
            (value === 'pending' || value === 'processing') && 'text-slate-400',
            value === 'success' && 'text-green-500',
            value === 'failed' && 'text-red-500',
        )}>{value}</div>
    },
}

const amount: ColumnDef<Payment> = {
    accessorKey: 'amount',
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
        const amount = parseFloat(row.getValue('amount'))
        const formatted = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount)

        return <div className="text-right font-medium">{formatted}</div>
    },
}

export const columns: ColumnDef<Payment>[] = [
    amount,
    status,
]
