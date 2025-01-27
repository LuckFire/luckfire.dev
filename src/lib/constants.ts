import { ComponentConstructor, createContext } from "preact";
import { lazy } from "preact-iso";

import { UnderConstruction } from "#/pages/UnderConstruction";
import { Home } from "#/pages/Home";
import { Projects } from "#/pages/Projects";
import { Contact } from "#/pages/Contact";

export const Pages: Array<{ path: string, location: string, component?: ComponentConstructor }> = [ 
    {
        path: '/',
        location: 'Home',
        component: Home
    },
    {
        path: '/projects',
        location: 'Projects',
        component: UnderConstruction
    },
    {
        path: '/contact',
        location: 'Contact',
        component: Contact
    },
];

const Sizes = {
    Montserrat32px: 'montserrat-px-32',
    Montserrat24px: 'montserrat-px-24',
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

const App = createContext<{
    currentPath: string;
    currentZoom: number;
}>(null);

export const Context = {
    App
};