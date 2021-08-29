import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { useState } from 'react';
import "react-dates/lib/css/_datepicker.css";
import "./calendar-styles.css"
import moment from 'moment';
import momentRandom from '../../../server/node_modules/moment-random/src';

const DatePicker = ({ startDate, endDate, onDatesChange }) => {

    const [focusedInput, setFocusedInput] = useState("")
    const beginning = moment()
    const end = moment().add(1, 'y')
    const availability = [...Array(Math.floor(Math.random() * 100))].map(() => momentRandom(end, beginning).format('YYYY-MM-DD'))


    return (
        <>
            <label class="text-sm font-medium text-gray-700">Dates</label>
            <div className="sm:text-sm date-range-picker px-3 w-full border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus-within:outline-none focus-within:ring-1 focus-within:ring-outsite-green focus-within:border-outsite-green disabled:text-gray-400 ">
                <DateRangePicker
                    startDate={startDate}
                    startDateId="startDate"
                    startDatePlaceholderText="Check-in"
                    endDate={endDate}
                    endDateId="endDate"
                    endDatePlaceholderText="Check-out"
                    onDatesChange={onDatesChange}
                    focusedInput={focusedInput}
                    onFocusChange={focusedInput => { setFocusedInput(focusedInput) }}
                    renderCalendarInfo={() =>
                        <div className="px-7 py-3 text-gray-500">
                            <p><b>2 nights</b> minimum stay<br />You can book <b>181 days</b> in advance</p>
                        </div>
                    }
                    showClearDates={true}
                    isDayBlocked={momentDate => availability.includes(momentDate.format('YYYY-MM-DD'))}

                />
            </div>
        </>
    )
}

export default DatePicker