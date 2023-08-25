interface CodeSectionProps {
    code: string
    className?: string
}

export const CodeSection = ({ code, className }: CodeSectionProps) => {
    return (
        <pre className={`bg-white bg-opacity-5 rounded p-2 overflow-x-auto pretty-scrollbar-x pretty-scrollbar-y max-h-80 ${className}`}>
            { code }
        </pre>
    )
}