'use client'
import { CalendarDays } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

function HoverCardDemo() {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button variant="link">@ssreynoso</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-72">
                <div className="flex justify-center space-x-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/ssreynoso.png" />
                        <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@ssreynoso</h4>
                        <p className="text-sm">Just a programmer.</p>
                        <div className="flex items-center pt-2">
                            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{' '}
                            <span className="text-xs text-muted-foreground">Programming since 2017</span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}

const HoverCardPage = () => {
    return (
        <main className="flex gap-8 h-full">
            <section className="w-1/2 max-h-full">
                <h1 className="text-4xl mb-2">Hover Card page</h1>
            </section>
            <section className="w-1/2">
                <HoverCardDemo />
            </section>
        </main>
    )
}

export default HoverCardPage
