import type { Component } from 'solid-js';

interface Props {
    prevUrl: string | undefined;
    nextUrl: string | undefined;
}

const Pagination: Component<Props> = ({ prevUrl, nextUrl }) => {
    return (
        <nav class="mt-7">
            {prevUrl ? (
                <a href={prevUrl}>
                    <button class="py-2 px-4 rounded-lg bg-ctp-mantle text-white mx-2 transition duration-200 border-white border disabled:cursor-not-allowed disabled:bg-ctp-surface0">
                        Previous
                    </button>
                </a>
            ) : (
                <a href={prevUrl}>
                    <button
                        class="py-2 px-4 rounded-lg bg-ctp-mantle text-white mx-2 transition duration-200 border-white border disabled:cursor-not-allowed disabled:bg-ctp-surface0"
                        disabled
                    >
                        Previous
                    </button>
                </a>
            )}

            {nextUrl ? (
                <a href={nextUrl}>
                    <button class="py-2 px-4 rounded-lg bg-ctp-mantle text-white mx-2 transition duration-200 border-white border disabled:cursor-not-allowed disabled:bg-ctp-surface0">
                        Next
                    </button>
                </a>
            ) : (
                <a href={nextUrl}>
                    <button
                        class="py-2 px-4 rounded-lg bg-ctp-mantle text-white mx-2 transition duration-200 border-white border disabled:cursor-not-allowed disabled:bg-ctp-surface0"
                        disabled
                    >
                        Next
                    </button>
                </a>
            )}
        </nav>
    );
};

export default Pagination;
