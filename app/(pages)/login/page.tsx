import { UserCircleIcon } from '@heroicons/react/24/outline';

export default function Login() {
    return (
        <div className='relative mx-auto flex w-full max-w-[400px] flex-col md:-mt-32'>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center">
                    <UserCircleIcon className='size-12 text-purple-900' />
                    <h2 className="mt-10 text-center text-2xl/7 font-bold tracking-tight text-purple-900">
                        Log in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-purple-700">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 p-1.5 text-purple-900 shadow-sm ring-1 ring-purple-300 placeholder:text-purple-300 hover:ring-purple-500 focus:ring-purple-800 focus-visible:ring-purple-800 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm/6 font-medium text-purple-700">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 p-1.5 text-purple-900 shadow-sm ring-1 ring-inset ring-purple-300 placeholder:text-purple-900 hover:ring-purple-500 focus:ring-purple-800 focus-visible:ring-purple-800 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-purple-700 px-3 py-1.5 text-sm/5 font-semibold text-white shadow-sm hover:bg-purple-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-900"
                            >
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
