'use client'
import { setCSSVariable } from '@/lib/utils'

const THEMES = ['gray', 'neutral', 'slate', 'stone', 'zinc'] as const
type ThemeType = (typeof THEMES)[number]
import grayJson from '@/styles/gray.json'
import neutralJson from '@/styles/neutral.json'
import slateJson from '@/styles/slate.json'
import stoneJson from '@/styles/stone.json'
import zincJson from '@/styles/zinc.json'
import { useTheme } from 'next-themes'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
} from './ui/select'
import { useEffect, useState } from 'react'

export const ChangeTheme = () => {
    const { resolvedTheme } = useTheme()
    const [colorTheme, setColorTheme] = useState<ThemeType>('slate')

    useEffect(() => {
        if (resolvedTheme && colorTheme) {
            let file: { light: object; dark: object }
            switch (colorTheme) {
                case 'gray':
                    file = grayJson
                    break
                case 'neutral':
                    file = neutralJson
                    break
                case 'slate':
                    file = slateJson
                    break
                case 'stone':
                    file = stoneJson
                    break
                case 'zinc':
                    file = zincJson
                    break
            }

            const fileObject = file[resolvedTheme as 'light' | 'dark']

            if (fileObject) {
                Object.entries(fileObject).forEach(([key, value]) => {
                    setCSSVariable(key, value)
                })
            }
        }
    }, [colorTheme, resolvedTheme])

    return (
        <Select defaultValue="slate" onValueChange={(value) => setColorTheme(value as ThemeType)}>
            <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Select a color theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel className='translate-x-[-25px]'>Color Themes</SelectLabel>
                    <SelectSeparator />
                    {THEMES.map((theme) => (
                        <SelectItem value={theme} key={theme}>
                            {`${theme.charAt(0).toUpperCase()}${theme.slice(1)}`}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
