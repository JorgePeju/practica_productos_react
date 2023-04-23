import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { UserContext } from '../auth/context/UserContext'

export const NavBar = () => {

    const { user } = useContext(UserContext)

    return (


        <>
            <nav >

                <ul className='flex navbar bg-gray-light'>


                    <div className='flex'>

                        <li className='nav-link'><NavLink
                            to='/index/products'
                            className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''} `}
                        >Productos</NavLink></li>

                        <li className='nav-link'><NavLink
                            to='/index/sunglasses'
                            className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''} `}
                        >Gafas de sol</NavLink></li>

                        <li className='nav-link'><NavLink
                            to='/index/men-shoes'
                            className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''} `}
                        >Zapatillas</NavLink></li>

                        <li className='nav-link'><NavLink
                            to='/index/laptops'
                            className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''} `}
                        >Laptops</NavLink></li>

                        <li className='nav-link'><NavLink
                            to='/index/search'
                            className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''} `}
                        >Buscar</NavLink></li>
                    </div>

                    <div className='flex'>
                        {user?.username && <p className='nav-link pnav'>Hola {user.username}</p>}

                        <li className='nav-link'><NavLink
                            to='/index/logout'
                            className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''} `}
                        >Logout</NavLink></li>

                    </div>

                </ul >

            </nav>
        </>

    )
}
