import {createContext, Dispatch} from 'react'
import {IHomeAction} from './HomeProvider'

export interface IHomeContextProps
{
    homeState: IHomeState;
    stateDispatch: Dispatch<IHomeAction>;
}

export type IHomeState = {
    scroll: number
}

export const initialHomeState: IHomeState = {
    scroll: 0
}

const HomeContext = createContext<IHomeContextProps>({
    homeState: initialHomeState,
    stateDispatch: () => {}
})
export const HomeContextConsumer = HomeContext.Consumer;
export const HomeContextProvider = HomeContext.Provider;
export default HomeContext