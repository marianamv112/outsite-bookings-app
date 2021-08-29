import { Tab } from '@headlessui/react'
import clsx from 'clsx'

export const LocationTabs = ({onChange, tabs }) => {
    
    return (
        <Tab.Group
            defaultIndex={0}
            onChange={onChange}>
            <Tab.List className="flex flex-wrap">
                {tabs.map((region) => (
                    <Tab
                        key={region}
                        value={region}
                        className={({ selected }) =>
                            clsx(
                                'rounded-xl px-4 py-3',
                                selected
                                    ? 'bg-outsite-green text-white'
                                    : 'bg-white text-gray-700 hover:text-gray-900'
                            )
                        }
                    >{region}
                    </Tab>
                ))}
            </Tab.List>
        </Tab.Group>
    )
}

export default LocationTabs