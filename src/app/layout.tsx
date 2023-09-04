import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import '@/styles/scroll-bar.css'
import '@/styles/animation.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavBar } from '@/components/nav-bar'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'shadcn practice',
    description: 'shadcn practice next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <NavBar />
                    <div className='p-8'>
                        {children}
                    </div>
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    )
}
