import {LoginPage, RegisterPage } from '../auth/pages/index'
import {NavBar} from '../components/index'
import { Route, Routes } from 'react-router-dom'

export const AuthRoutes = () => {


  return (

   <>

   <NavBar />

    <main>

      <Routes>

        <Route path='/' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />

      </Routes>

    </main>
    
    
    </>
  )

}
