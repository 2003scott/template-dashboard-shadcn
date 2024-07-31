'use client'
import NextTopLoader from 'nextjs-toploader'

export const NextProgress = () => {
    return (
        <NextTopLoader showSpinner={false} crawlSpeed={100} speed={100} color='#1A96C6' />
    )
}
