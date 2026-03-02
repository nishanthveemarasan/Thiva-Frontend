const PageError = () => {
    return <div className="flex justify-center items-center font-bold mt-20">

        <div className="flex p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 border border-green-200 justify-center" role="alert">
            <svg className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Warning</span>
            <div>
                <span className="font-medium"></span>
                Something went wrong while loading the page. Please try again later or
                <a href={`mailto:${process.env.APP_SUPPORT_EMAIL}`}
                    className="font-semibold underline text-yellow-900 hover:text-yellow-700 decoration-yellow-900/50 mx-1">
                    contact support
                </a>
                if the issue persists.
            </div>
        </div>
    </div>
}

export default PageError;