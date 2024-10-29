import { TrophyIcon } from '@heroicons/react/24/outline';


export default function Header() {
    return (
        <header className='flex items-center w-full h-150 rounded-lg bg-purple-700 px-3 py-3 text-lg/3 font-semibold text-white shadow-md '>
            <TrophyIcon className='size-12 text-yellow-200' />
            <h1 className=''>Rate Me App for Business</h1>
            <button
                className="flex w-150 justify-center rounded-full bg-white px-3 py-1.5 text-sm/5 font-semibold text-purple-700 shadow-sm hover:bg-purple-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-900"
            >
                Sign In
            </button>
        </header>
    );
}