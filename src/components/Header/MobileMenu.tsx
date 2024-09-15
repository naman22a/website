import { For, Show } from 'solid-js';
import { setState, state } from '../../store';
import { homeRoutes, routes } from '../../constants';
import type { PageRoute } from '../../interfaces';

const PageLink = ({ name, href }: PageRoute) => {
    return (
        <a
            href={href}
            class="my-5 text-lg capitalize"
            onClick={() => setState({ open: false })}
        >
            {name}
        </a>
    );
};

const MobileMenu = () => {
    return (
        <nav
            class={`flex flex-col absolute top-20 bg-ctp-surface0 w-full px-4 py-10 text-white items-center justify-center select-none ${
                state.open ? 'left-0' : 'left-full'
            } transition-all duration-300 inline-block md:hidden`}
        >
            <For each={routes}>{(route) => <PageLink {...route} />}</For>

            <Show when={window.location.pathname === '/'}>
                <For each={homeRoutes}>
                    {(route) => <PageLink {...route} />}
                </For>
            </Show>
        </nav>
    );
};

export default MobileMenu;
