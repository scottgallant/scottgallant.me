
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import SocialLinks from './social-links'
import { useRouter } from "next/router";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

    const router = useRouter();

    return (
        <Disclosure as="nav" className="font-sans">
            {({ open }) => (
                <>
                    <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                    <a
                                        href="/"
                                        className={router.pathname == "/" ? "border-stone-500 border-b-2 text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium" : "hover:border-stone-200 hover:border-b-2 border-b-2 border-transparent text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"}
                                    >
                                        Home
                                    </a>
                                    {/* <a
                                        href="/categories"
                                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                    >
                                        Categories
                                    </a>
                                    <a
                                        href="/authors/scott-gallant"
                                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                    >
                                        About
                                    </a> */}
                                </div>
                            </div>
                            <SocialLinks />
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="pt-2 pb-4 space-y-1">
                            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                            <Disclosure.Button
                                as="a"
                                href="/"
                                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Home
                            </Disclosure.Button>
                        </div>
                        {/* <div className="pt-2 pb-4 space-y-1">
                            <Disclosure.Button
                                as="a"
                                href="/categories"
                                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Categories
                            </Disclosure.Button>
                        </div> */}
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}