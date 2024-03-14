import React from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5';
import Input from '../Input';
import Button from '../Button';


function SearchForSmallDevices({setOpenSearch}) {
    return (
        <>
            {open && (
                <div className="fixed bg-black bg-opacity-90 z-50 inset-0 h-screen w-full flex items-start justify-start">
                    <div className="sm:p-8 p-4 relative w-full">
                        <div className="absolute top-5 right-5 cursor-pointer">
                            <IoCloseCircleOutline
                                size={30}
                                onClick={() => setOpenSearch((prev) => !prev)}
                            />
                        </div>
                        <form
                            // onSubmit={handleSubmit(search)}
                            className="flex items-center mt-10 border border-gray-600 rounded-lg"
                        >
                            <Input
                                type="text"
                                placeholder="Search"
                                className="px-4 py-2 w-full border-none rounded-s-lg"
                            />
                            <Button
                                type="submit"
                                className="px-4 py-2  rounded-e-lg"
                            >
                                Search
                            </Button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default SearchForSmallDevices