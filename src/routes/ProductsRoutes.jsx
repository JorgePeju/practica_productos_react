import { Routes, Route } from 'react-router-dom'
import { HomePage, SearchPage , Products } from './components'
export const ProductsRoutes = () => {

    return (

        <>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='form' element={<Products />} />
         
        </Routes>




        </>

    )
}
