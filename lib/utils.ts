import {format, differenceInCalendarDays, addDays, parseISO} from 'date-fns'

//Count days between two date strings
export function countDays(start: string, end: string): number {
    return differenceInCalendarDays(parseISO(end), parseISO(start))
}

//Get all dates between start and end (inclusive)
export function getDateRange(start: string, end: string): string[] {
    const days = countDays(start, end)
    return Array.from({ length: days + 1 }, (_, i) =>
        format(addDays(parseISO(start), i), 'yyyy-MM-dd')
    )
}

//Get the minimum selectable date from an item
export function getMinDate(minimumNoticeDays: number): string {
    return format(addDays(new Date(), minimumNoticeDays), 'yyyy-MM-dd')
}

//Format date for display
export function displayDate(dateStr: string): string {
    return format(parseISO(dateStr), 'MMM d, yyyy')
}