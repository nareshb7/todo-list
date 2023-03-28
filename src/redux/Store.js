import { configureStore } from '@reduxjs/toolkit'
import FormReducer from './UserDetails/Reducer'

// const Store = configureStore(FormReducer)

const Store = configureStore({ reducer: FormReducer })

export default Store
