import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export const DetailView = () => {

  let {id} = useParams();

  const url = import.meta.env.VITE_URL_PRODUCT_DJSON + id
  
  const request = useFetch(url);

  const product = request.products
    
  return (

    <>
    <article>

          <h3> {product.title} </h3>

          <div>

            <img src={product.photo} alt={product.title} title={product.title} />

          </div>
          <p>{product.description}</p>
          <p> Precio: {product.price} € </p>
          <p> Valoración: {product.rating} </p>

        </article>
    </>

  )
}
