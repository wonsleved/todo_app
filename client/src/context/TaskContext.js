import {createContext} from 'react'

function noop() {}

export const TaskContext = createContext({
    token: null,
    userId: null,
    newtask: noop(),

})