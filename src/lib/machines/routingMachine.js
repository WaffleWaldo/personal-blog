import { createMachine } from "xstate";

export const routingMachine = createMachine({
    id: "routing",
    initial: "home",
    states: {
        home: {
            on:{
                GO_TO_ABOUT: 'about',
                GO_TO_CONTACT: 'contact',
                GO_TO_POSTS: 'posts'
            }
        },
        about: {
            on:{
                GO_TO_HOME: 'home',
                GO_TO_CONTACT: 'contact',
                GO_TO_POSTS: 'posts'
            }
        },
        contact: {
            on:{
                GO_TO_ABOUT: 'about',
                GO_TO_HOME: 'home',
                GO_TO_POSTS: 'posts'
            }
        },
        posts: {
            on:{
                GO_TO_ABOUT: 'about',
                GO_TO_CONTACT: 'contact',
                GO_TO_HOME: 'home'
            }
        },
    }
});