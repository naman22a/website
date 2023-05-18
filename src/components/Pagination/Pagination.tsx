import React, { Dispatch, SetStateAction } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface Props {
    totalBlogs: number;
    blogsPerPage: number;
    currentPage: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination: React.FC<Props> = ({
    totalBlogs,
    blogsPerPage,
    setCurrentPage,
    currentPage
}) => {
    let pages: number[] = [];

    for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className="flex justify-center items-center">
            <button
                aria-label="Previous Page"
                className={`p-2 rounded-lg bg-ctp-crust text-white mx-2 transition duration-200 border-white border ${
                    currentPage - 1 < 1
                        ? 'cursor-not-allowed bg-gray-800'
                        : 'hover:bg-ctp-sapphire'
                }`}
                disabled={currentPage - 1 < 1}
                onClick={() => {
                    if (currentPage - 1 < 1) {
                        return;
                    }
                    setCurrentPage(currentPage - 1);
                }}
            >
                <BsChevronLeft />
            </button>
            {pages.map((page, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentPage(page)}
                    className={`py-1 px-3 rounded-lg text-white mx-2 transition duration-200 ${
                        currentPage === page
                            ? 'bg-ctp-red hover:bg-opacity-90'
                            : 'bg-ctp-crust hover:bg-opacity-75 border-white border'
                    }`}
                >
                    {page}
                </button>
            ))}
            <button
                aria-label="Next Page"
                className={`p-2 rounded-lg bg-ctp-crust text-white mx-2 transition duration-200 border-white border ${
                    currentPage === Math.ceil(totalBlogs / blogsPerPage)
                        ? 'cursor-not-allowed bg-gray-800'
                        : 'hover:bg-ctp-sapphire'
                }`}
                disabled={currentPage === Math.ceil(totalBlogs / blogsPerPage)}
                onClick={() => {
                    if (currentPage === Math.ceil(totalBlogs / blogsPerPage)) {
                        return;
                    }
                    setCurrentPage(currentPage + 1);
                }}
            >
                <BsChevronRight />
            </button>
        </div>
    );
};

export default Pagination;
