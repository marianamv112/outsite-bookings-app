import { useEffect, useState } from "react"
import locationServices from "../services/locations"
import { Link } from "react-router-dom";
import Form from "../components/Form";

export const Space = () => {
    const authResult = new URLSearchParams(window.location.search);
    const spaceId = authResult.get('where')
    const [space, setSpace] = useState({})

    useEffect(() => {
        locationServices.getSpace(spaceId).then(res => setSpace(res))
    }, [spaceId])

    return (
        <section>
            {space && space.wfContent &&
                <>
                    <div className="flex flex-col justify-between p-4 sm:p-6 lg:p-8 bg-no-repeat bg-cover bg-center bg-opacity-30" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${space.wfContent.heroImage})` }}>
                        <div className="flex items-center justify-between">
                            <Link to="/">
                                <img
                                    className="h-5 w-auto"
                                    src="/images/outsite-logo-white.png"
                                    alt="outsite logo"
                                />
                            </Link>
                            <button className="flex items-center text-left bg-white px-3 py-1 rounded-lg border-1 border-gray-200">
                                <div className="h-8 w-8">
                                    <img className="h-full w-full rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" />
                                </div>
                                <div className="flex flex-col items-end ml-3">
                                    <span className="text-sm text-gray-900">Jane Doe</span>
                                </div>
                            </button>
                        </div>
                        <div className="mt-8 sm:mt-20">
                            <div className="flex justify-between mb-4">
                                <div>
                                    <span className="text-sm text-white uppercase">{space.wfContent.houseName}</span>
                                    <h2 className="text-2xl text-white">{space.wfContent.name}</h2>
                                </div>
                            </div>
                            <Form />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row p-4 sm:p-6 lg:p-8">
                        <h3 className="flex-1 py-8 md:pr-8 mb-3 py-8">Here are listed the property rooms</h3>
                    </div>
                </>
            }
        </section>
    )
}

export default Space