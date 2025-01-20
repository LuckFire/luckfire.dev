import { ComponentConstructor } from "preact";

import { Home } from "#/pages/Home";
import { Contact } from "#/pages/Contact";
import { Projects } from "#/pages/Projects";

export const Pages: Array<{ path: string, location: string, component: ComponentConstructor }> = [ 
    {
        path: '/',
        location: 'Home',
        component: Home
    },
    // {
    //     path: '/projects',
    //     location: 'Projects',
    //     component: Projects
    // },
    // {
    //     path: '/contact',
    //     location: 'Contact',
    //     component: Contact
    // },
]