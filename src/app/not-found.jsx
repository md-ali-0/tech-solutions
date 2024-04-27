import Link from "next/link";

const NotFound404Page = () => {
    return (
        <div className="flex bg-secondary justify-center items-center min-h-screen px-6 py-12 mx-auto">
            <div>
                <p className="text-xl font-medium text-blue-500 dark:text-blue-400">404 error</p>
                <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                    We can’t find that page
                </h1>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Sorry, the page you are looking for doesn&apos;t exist or has been moved.
                </p>
                <div className="flex items-center mt-6 gap-x-3">
                    <Link className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-blue-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group" href={'/'}>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-150 ease-in-out bg-blue-600 group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 text-blue-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                                />
                            </svg>
                        </span>
                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                                />
                            </svg>
                        </span>
                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                            Go to Home
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound404Page;