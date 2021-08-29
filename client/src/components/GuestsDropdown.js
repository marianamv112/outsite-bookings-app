import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpIcon, ChevronDownIcon, CheckIcon } from '@heroicons/react/solid'
import clsx from 'clsx'

export const GuestsDropDown = ({ value, onChange, options }) => {
    const props = { options };

    /* Component based on: https://tailwindui.com/components/application-ui/forms/select-menus */

    return (
        <Listbox value={value} onChange={onChange}>
            {({ open }) => (
                <>
                    <Listbox.Label className="block text-sm font-medium text-gray-700">Guests</Listbox.Label>
                    <div className="mt-1 relative">
                        <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default sm:text-sm focus-within:border-outsite-green">
                            <span className="flex items-center">
                                <span>{value}</span>
                            </span>
                            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                {open ? <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /> : <ChevronUpIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />}
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-50 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base overflow-auto sm:text-sm">
                                {props.options.map((numberOfGuests) => (
                                    <Listbox.Option
                                        key={numberOfGuests}
                                        value={numberOfGuests}
                                        className={({ active, selected }) =>
                                            clsx(
                                                active ? 'bg-gray-100 relative' : 'text-gray-900',
                                                selected ? 'relative font-medium' : 'text-gray-900 font-normal',
                                                'cursor-pointer select-none relative py-1 py-2 pl-3 pr-4 pl-8 pr-9'
                                            )}
                                    >
                                        {({ selected }) => (
                                            <div className="flex flex-row">
                                                {selected ?
                                                    <span
                                                        className="absolute inset-y-0 left-0 flex items-center pl-3 text-green"
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                    : null}
                                                <span>
                                                    {numberOfGuests}

                                                </span>
                                            </div>
                                        )}

                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox >
    )
}

export default GuestsDropDown;