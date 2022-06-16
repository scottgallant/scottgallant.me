export default function Example() {
    return (
        <div>
            <h2 className="inline text-xl sm:block sm:text-xl">
                Get posts via email
            </h2>
            <form className="mt-2 sm:flex">
                <label htmlFor="email-address" className="sr-only">
                    Email address
                </label>
                <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-5 py-3 placeholder-gray-500 focus:ring-stone-500 focus:border-stone-500 sm:max-w-xs border-gray-300 rounded-md"
                    placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500"
                    >
                        Subscribe
                    </button>
                </div>
            </form>
        </div>
    )
}
