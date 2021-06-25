import Image from 'next/image';
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';


function Header() {
    return (
        <div className="flex sticky top-0 z-50 bg-white items-center p-2 lg:px-5 shadow-md">

            <div className="flex items-center">
                <Image
                    src="https://links.papareact.com/5me"
                    width={40}
                    height={40}
                    layout='fixed'
                />
                <div className="flex ml-2 items-center rounded-full
                bg-gray-100 p-2">
                    <SearchIcon
                        className="h-6 text-gray-600"
                    />
                    <input
                        className="flex flex-shrink hidden md:inline-flex ml-2 items-center 
                        outline-none placholder-gray-500 bg-transparent"
                        type='text' placeholder='Search Facebook' />
                </div>
            </div>

            <div className="flex justify-center flex-grow">

                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

            <div className="flex items-center sm:space-x-2 justify-end">
                {/* Profile Pic */}

                <p className="font-semi-bold pr-3 whitespace-nowrap">Mike Torres
                </p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>

        </div>
    )
}

export default Header
