import SpaceDropdown from "./SpaceDropdown"
import GuestsDropDown from "./GuestsDropdown"
import { useState, useEffect } from "react"
import locationServices from "../services/locations"
import { useHistory } from "react-router-dom";
import DatePicker from "./DateRangePicker";
import moment from "moment";

export const Form = () => {

    const authResult = new URLSearchParams(window.location.search);
    const spaceIdQuery = authResult.get('where')
    const guestsNumberQuery = authResult.get('guests')
    const startDateQuery = authResult.get('startDate')
    const endDateQuery = authResult.get('endDate')

    const [space, setSpace] = useState({})
    const [locations, setLocations] = useState([])

    const guestOptions = ["One Guest", "Two Guests"]
    const [guests, setGuests] = useState(guestsNumberQuery ? guestOptions[guestsNumberQuery - 1] : "One Guest")
    const history = useHistory();

    const [startDate, setStartDate] = useState(startDateQuery ? moment(startDateQuery) : "")
    const [endDate, setEndDate] = useState(endDateQuery ? moment(endDateQuery) : "")

    useEffect(() => {

        locationServices.getLocations().then(
            res => {
                setLocations(res)
                if (!spaceIdQuery) {
                    setSpace(res[0].data[0])
                } else {
                    const selectedSpace = res.filter((element) =>
                        element.data.some((subElement) => subElement.id === spaceIdQuery))
                        .map(element =>
                            element.data.filter(subElement => subElement.id === spaceIdQuery))[0][0];
                    setSpace(selectedSpace)
                }
            })
    }, [spaceIdQuery])

    const submit = () => {
        const guestsNumber = guestOptions.indexOf(guests) + 1
        if (startDate && endDate) {
            history.push(`/book-now/search?where=${space.id}&guests=${guestsNumber}&startDate=${startDate.format('YYYY-MM-DD')}&endDate=${endDate.format('YYYY-MM-DD')}`);
        } else {
            history.push(`/book-now/search?where=${space.id}&guests=${guestsNumber}`);
        }
    }

    return (
        <div className="bg-white filter drop-shadow-md rounded-md px-4 py-4 sm:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-2 items-end">
                <div className="lg:col-span-2 text-left	">
                    <SpaceDropdown value={space} onChange={setSpace} locations={locations} />
                </div>
                <div className="lg:col-span-2 text-left	">
                    <DatePicker
                        startDate={startDate}
                        endDate={endDate}
                        onDatesChange={({ startDate, endDate }) => { setStartDate(startDate); setEndDate(endDate) }}
                        />
                </div>
                <div className="text-left">
                    <GuestsDropDown value={guests} onChange={setGuests} options={guestOptions} />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 text-sm bg-outsite-green rounded text-white w-full"
                    onClick={submit}
                >
                    Search
                </button>
            </div>
        </div>

    )
}

export default Form