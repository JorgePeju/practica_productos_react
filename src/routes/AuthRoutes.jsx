import {LoginPage, RegisterPage } from '../auth/pages/index'

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
