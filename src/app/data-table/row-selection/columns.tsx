'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Payment } from '../columns'
import { Checkbox } from '@/components/ui/checkbox'

const checked: ColumnDef<Payment> = {
    id: 'select',
    header: ({ table }) => (
        <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
        />
    ),
    cell: ({ row }) => (
        <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
        />
    ),
    enableSorting: false,
    enableHiding: false,
}

export const columns: ColumnDef<Payment>[] = [
    checked,
    { accessorKey: 'status', header: 'Status' },
    { accessorKey: 'email', header: 'Email' },
    { accessorKey: 'amount', header: 'Amount' },
]
