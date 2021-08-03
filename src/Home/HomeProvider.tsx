import { IHomeState } from './HomeContext'

export interface IHomeAction
{
    type: 'setScroll'
    payload: number
}

export const homeReducer = (state: IHomeState, action: IHomeAction) : IHomeState => {
    switch (action.type) {
        case 'setScroll': {
            return {
                ...state,
                scroll : action.payload
            }
        }
        default:
            return state;
    }
}

// export const HomeProvider = (props: { children: ReactNode }): JSX.Element => {
//     const [state, dispatch] = useReducer(homeReducer, initialState)
  
//     return (
//       <HomeContext.Provider value={{state,dispatch}}>
//         {props.children}
//       </HomeContext.Provider>
//     )
//   }
  
// export default HomeProvider