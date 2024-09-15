import type { PageRoute } from '../interfaces';

export const routes: PageRoute[] = [
    {
        name: 'home',
        href: '/'
    },
    {
        name: 'blogs',
        href: '/blogs'
    }
];

export const homeRoutes: PageRoute[] = [
    {
        name: 'projects',
        href: '#projects'
    },
    {
        name: 'contact',
        href: '#contact'
    }
];
