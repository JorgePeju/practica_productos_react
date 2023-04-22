import { Link } from 'react-router-dom';

export const NavBar = () => {

    return (


        <>
            <nav >

                <ul >

                    <div>

                        <li><Link to='/index/products'>Productos</Link></li>
                        <li><Link to='/index/sunglasses'>Gafas de sol</Link></li>
                        <li><Link to='/index/men-shoes'>Zapatillas</Link></li>
                        <li><Link to='/index/laptops'>Laptops</Link></li>

                    </div>

                    <div >

                        <li><Link to='/index/logout'>Logout</Link></li>

                    </div>

                </ul >

            </nav>
        </>

    )
}
