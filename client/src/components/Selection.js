import { useEffect, useState } from "react"
import LocationTabs from "./LocationTabs"
import locationServices from "../services/locations"
import { Link } from "react-router-dom";


export const Selection = () => {
    const [regions, setRegions] = useState([])
    const [region, setRegion] = useState("")
    const [properties, setProperties] = useState([])

    useEffect(() => {
        locationServices.getRegions().then(
            res => { setRegions(res); return res }
        ).then(res => {
            setRegion(res[0])
        })
    }, [])

    useEffect(() => {
        locationServices.getProperties(region).then(
            res => setProperties(res)
        )
    }, [region])

    const tabSelection = (index) => {
        setRegion(regions[index])
    }


    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-16 space-y-6">
            <LocationTabs onChange={tabSelection} tabs={regions} />
            <div className="grid sm:grid-cols-2 md:grid-cols-4 sm:gap-4">
                {properties && properties.map(property =>
                (<Link to={`/book-now/search?where=${property.id}`} key={property.id}>
                    <div
                        className='-z-1 aspect-w-4 aspect-h-3 bg-cover bg-no-repeat bg-center rounded-md'
                        style={{ backgroundImage: `url(${property.wfContent.heroImage})` }}></div>
                    <div className="py-2 flex flex-col items-start">
                        <h4 className="text-lg font-medium text-gray-900">{property.wfContent.name}</h4>
                        <p className="text-sm text-gray-600">{property.wfContent.houseName}</p>
                    </div>
                </Link>
                )
                )}
            </div>
        </section>
    )
}

export default Selection