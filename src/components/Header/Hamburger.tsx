import { twMerge } from 'tailwind-merge';
import { setState, state } from '../../store';

const Hamburger = () => {
    return (
        <div
            class="w-10 h-10 m-5 relative cursor-pointer md:hidden ml-auto"
            onClick={() => setState({ open: !state.open })}
        >
            <span
                class={twMerge(
                    'bg-white h-[3px] w-full rounded-[5px] block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3 transition-all duration-150',
                    state.open && 'translate-y-0 rotate-45'
                )}
            ></span>
            <span
                class={twMerge(
                    'bg-white h-[3px] w-2/3 rounded-[5px] block absolute top-1/2 left-1/2 -translate-x-2 -translate-y-1/2 transition-all duration-150',
                    state.open && 'w-0'
                )}
            ></span>
            <span
                class={twMerge(
                    'bg-white h-[3px] w-full rounded-[5px] block absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-3 transition-all duration-150',
                    state.open && 'translate-y-0 -rotate-45'
                )}
            ></span>
        </div>
    );
};

export default Hamburger;
