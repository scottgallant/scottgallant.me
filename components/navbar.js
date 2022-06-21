
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
                                    <a
                                        href="/"
                                        className={router.asPath == "/" || router.asPath == "/home" ?
                                            "text-gray-900 dark:text-white border-gray-400 border-b-2 inline-flex items-center px-1 pt-1 text-sm font-medium" :
                                            "text-gray-500 dark:text-gray-400 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-600 hover:border-b-2 border-b-2 border-transparent inline-flex items-center px-1 pt-1 text-sm font-medium"}
                                    >
                                        Home
                                    </a>
                                    <a
                                        href="/about"
                                        className={router.asPath == "/about" ?
                                            "text-gray-900 dark:text-white border-gray-400 border-b-2 inline-flex items-center px-1 pt-1 text-sm font-medium" :
                                            "text-gray-500 dark:text-gray-400 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-600 hover:border-b-2 border-b-2 border-transparent inline-flex items-center px-1 pt-1 text-sm font-medium"}
                                    >
                                        About
                                    </a>
                                    <a
                                        href="/articles"
                                        className={router.asPath == "/articles" ?
                                            "text-gray-900 dark:text-white border-gray-400 border-b-2 inline-flex items-center px-1 pt-1 text-sm font-medium" :
                                            "text-gray-500 dark:text-gray-400 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-600 hover:border-b-2 border-b-2 border-transparent inline-flex items-center px-1 pt-1 text-sm font-medium"}
                                    >
                                        Articles
                                    </a>
                                </div>
                            </div>
                            <SocialLinks />
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="pt-2 pb-4">
                            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                            <Disclosure.Button
                                as="a"
                                href="/"
                                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Home
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="/about"
                                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                About
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="/articles"
                                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Articles
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}