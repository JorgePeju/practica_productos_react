import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage, SearchPage } from '../pages'
import { LaptopsPage, MenShoesPage, ProductsPage, SunglassesPage } from '../products/pages'
import { NavBarAuth } from '../auth/components/NavBarAuth'


export const ProductsRoutes = () => {

  return (

    <>
      <NavBarAuth />

      <main>

        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/men-shoes' element={<MenShoesPage />} />
          <Route path='/sunglasses' element={<SunglassesPage />} />
          <Route path='/laptops' element={<LaptopsPage />} />

        </Routes>

      </main>


    </>

  )
}
