import { Route, Routes, Navigate } from 'react-router-dom'

export const AppRouter = () => {
    return (

        <>
            <Routes>
                <Route path='login' element={<LoginPage />} />

                <Route path='/*' element={<Navigate to={'/'} />} />

            </Routes>
        </>

    )
}
