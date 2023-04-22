import { Link } from 'react-router-dom';

export const SingleProduct = ({id, title, description, photo, price, rating, category}) => {

  return (

    <>
    <article id={id}>

          <h3> {title} </h3>

          <div>

            <img src={photo} alt={title} title={title} />

          </div>

          <p> Precio: {price.toLocaleString('de-DE')} € </p>

          <button data-category={category}>

            <Link to={`/product/${id}`}> Vista Detalle </Link>

          </button>
        </article>
    </>

  )
}
