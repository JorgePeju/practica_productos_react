import { Route, Routes } from 'react-router-dom'
import {ProductsRoutes} from './ProductsRoutes'
import { AuthRoutes } from './AuthRoutes'

export const AppRouter = () => {

    return (

        <>
            <Routes>
                    
                <Route path='login' element={<AuthRoutes/>} />
                <Route path='/*' element={<ProductsRoutes/>} />

            </Routes>
        </>

    )
}

