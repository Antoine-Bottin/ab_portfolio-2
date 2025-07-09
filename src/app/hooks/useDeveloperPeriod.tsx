'use client'

import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

const useExperienceCounter = () => {
    const startDate = '2021-03-01'
    const [timeElapsed, setTimeElapsed] = useState('')

    useEffect(() => {
        const updateExperience = () => {
            const now = dayjs()
            const start = dayjs(startDate)
            const diff = dayjs.duration(now.diff(start))

            setTimeElapsed(
                `${diff.years()} years, ${diff.months()} months, ${diff.days()} days, ${diff.hours()} hours, ${diff.minutes()} minutes, and ${diff.seconds()} seconds.`
            )
        }

        // Update every second
        updateExperience() // Run immediately on mount
        const interval = setInterval(updateExperience, 1000)

        // Cleanup interval on unmount
        return () => clearInterval(interval)
    }, [])

    return timeElapsed
}

export default useExperienceCounter