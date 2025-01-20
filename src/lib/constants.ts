import { ComponentConstructor } from "preact";

import { Home } from "#/pages/Home";
import { Contact } from "#/pages/Contact";
import { Projects } from "#/pages/Projects";

export const Pages: Array<{ path: string, location: string, component?: ComponentConstructor }> = [ 
    {
        path: '/',
        location: 'Home',
        component: Home
    },
    {
        path: '/projects',
        location: 'Projects',
        component: undefined
    },
    {
        path: '/contact',
        location: 'Contact',
        component: undefined
    },
];

const Sizes = {
    Montserrat120px: 'montserrat-px-120',
    Montserrat30px: 'montserrat-px-30',
    Montserrat20px: 'montserrat-px-20',
    Montserrat16px: 'montserrat-px-16',
};

const Weights = {
    Montserrat100: 'montserrat-100',
    Montserrat200: 'montserrat-200',
    Montserrat300: 'montserrat-300',
    Montserrat400: 'montserrat-400',
    Montserrat500: 'montserrat-500',
    Montserrat600: 'montserrat-600',
    Montserrat700: 'montserrat-700',
    Montserrat800: 'montserrat-800',
    Montserrat900: 'montserrat-900',
};

export const Fonts = { Sizes, Weights };