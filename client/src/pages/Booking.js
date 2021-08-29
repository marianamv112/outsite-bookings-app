import Form from "../components/Form";
import { Selection } from "../components/Selection"
import { Navbar } from "../components/Navbar"


export const Booking = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full mx-auto h-96 bg-promotional-photo bg-no-repeat bg-cover bg-center"> </div>
            <div className="container mx-auto px-4 z-10">
                <div className="-mt-56 sm:-mt-32 lg:-mt-24">
                    <div class="text-3xl text-white font-semibold mb-4">Work anywhere. Live differently.</div>
                    <Form />
                </div>
            </div>
            <Selection />
        </div>
    )
}

export default Booking