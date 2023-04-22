import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export const DetailView = () => {

  let {id} = useParams();

  const request = useFetch(import.meta.env.VITE_URL_PRODUCT_DJSON, id);

  const product = request.products
    
  return (

    <>
    <article>

          <h3> {product.title} </h3>

          <div>

            <img src={product.photo} alt={product.title} title={product.title} />

          </div>
          <p>{product.description}</p>
          <p> Precio: {product.price.toLocaleString('de-DE')} € </p>
          <p> Valoración: {product.rating} </p>

        </article>
    </>

  )
}
