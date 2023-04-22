import { Link } from 'react-router-dom';

export const NavBar = () => {

  return (

    <>
      <nav >

        <ul >

          <div>

            <li><Link to='/'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
            
          </div>

        </ul >

      </nav>
    </>
  )
}
