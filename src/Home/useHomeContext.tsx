import { useContext } from 'react'
import HomeContext, { IHomeContextProps } from './HomeContext'

const UseHomeContext = (): IHomeContextProps => useContext(HomeContext)

export default UseHomeContext