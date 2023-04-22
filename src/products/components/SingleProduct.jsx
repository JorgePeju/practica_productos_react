import { Link } from 'react-router-dom';

export const SingleProduct = ({id, title,description, photo, price, rating, }) => {

  return (

    <>
    <article id={id}>

          <h3> {title} </h3>

          <div>

            <img src={photo} alt={title} title={title} />

          </div>

          <p> Precio: {price} € </p>

          <button>

            <Link to={`/index/detail-view/${id}`}> Vista Detalle </Link>

          </button>
        </article>
    </>

  )
}
