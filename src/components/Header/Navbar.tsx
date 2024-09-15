import { For, Show } from 'solid-js';
import { homeRoutes, routes } from '../../constants';
import type { PageRoute } from '../../interfaces';

const PageLink = ({ name, href }: PageRoute) => {
    return (
        <a
            href={href}
            class="border-b-transparent pb-2 border-b-4 hover:border-b-ctp-sapphire transition-all duration-150"
        >
            /{name}
        </a>
    );
};

const Navbar = () => {
    return (
        <nav class="hidden md:inline-block ml-auto font-JetBrains">
            <div class="flex items-center gap-3">
                <For each={routes}>{(route) => <PageLink {...route} />}</For>

                <Show when={window.location.pathname === '/'}>
                    <For each={homeRoutes}>
                        {(route) => <PageLink {...route} />}
                    </For>
                </Show>
            </div>
        </nav>
    );
};

export default Navbar;
