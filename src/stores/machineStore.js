import { writable } from 'svelte/store';
import { interpret } from 'xstate';
import { routingMachine } from '$lib/machines/routingMachine';

// @ts-ignore
const createMachineStore = (machine) => {
    const { subscribe, set } = writable(machine.initialState);

    const service = interpret(machine)
        .onTransition((state) => {
        set(state);
        })
        .start();

    return {
        subscribe,
        send: service.send,
    };
};

export const routingService = createMachineStore(routingMachine);