import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const setCSSVariable = function(variable: string, value: string) {
    document.documentElement.style.setProperty(variable, value)
}