import { Calendar } from '@/components/ui/calendar'

const CalendarPage = () => {
    return (
        <>
            <div>
                <Calendar mode='default'/>
                <Calendar mode='multiple'/>
                <Calendar mode='range'/>
                <Calendar mode='single'/>
                <Calendar className='border rounded'/>
                <Calendar/>
                {/* <Calendar className='bg-warning'/> */}
            </div>
        </>
    )
}

export default CalendarPage