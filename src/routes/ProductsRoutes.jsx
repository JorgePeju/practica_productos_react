import { Routes, Route, Navigate } from 'react-router-dom'
import {DetailView } from '../products/components/index'
import {ProductsPage} from '../products/pages/index'
import {HomePage, SearchPage} from '../pages/index'
import {NavBar} from '../components/index'

export const ProductsRoutes = () => {

  return (

    <>

      <NavBar />

      <main>

        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='products' element={<ProductsPage />} />
          <Route path='detail-view/:id' element={<DetailView />} />
          <Route path='/' element={<Navigate to='/products'/>} />

        </Routes>

      </main>


    </>

  )
}
