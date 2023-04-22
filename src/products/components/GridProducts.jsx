import { useFetch } from "../hooks/useFetch"
import { SingleProduct } from "./SingleProduct"


export const GridProducts = ({category}) => {

  const { products } = useFetch( null, category)

  return (

    <>

      <div>

        {
          products.map(item => (

            <SingleProduct key={item.id} {...item} />

          ))
        }

      </div>

    </>

  )
}
