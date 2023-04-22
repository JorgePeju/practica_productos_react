import { useContext } from "react"
import {UserContext} from '../auth/context/UserContext'


export const Home = () => {

  const {user}= useContext(UserContext)

  return (

    <>
        <h1>Home Page</h1>

        <h2>Bienvenido {user?.username}</h2>

    </>


)
}
