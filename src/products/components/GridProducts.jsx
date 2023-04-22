import { useFetch } from "../hooks/useFetch"
import { SingleProduct } from "./SingleProduct"


export const GridProducts = ({category}) => {

  const request = useFetch( import.meta.env.VITE_URL_BASE_DJSON, category )

  const product = request.products

  return (

    <>

      <div>

        {
          product.map(item => (

            <SingleProduct key={item.id} {...item} />

          ))
        }

      </div>

    </>

  )
}
