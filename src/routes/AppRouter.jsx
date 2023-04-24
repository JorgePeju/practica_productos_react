import { Route, Routes } from 'react-router-dom'
import { ProductsRoutes } from './ProductsRoutes'
import { AuthRoutes } from './AuthRoutes'

export const AppRouter = () => {
    
    
    return (

        <>
            <Routes>

                <Route path='/*' element={<AuthRoutes />} />
                <Route path='/index/*' element={<ProductsRoutes />} />

            </Routes>
        </>

    )
}

// {
//     status === 'noAuhtenticate' ? (

//        <Route path='/' element={<AuthRoutes />} />,
//        <Route path='/*' element={<Navigate to={'/'}/>} />
       

//     ) : (

//        <Route path='/' element={<ProductsRoutes />} />,
//        <Route path='/*' element={<Navigate to={'/'}/>} />

//     )
// }