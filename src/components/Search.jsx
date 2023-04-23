import { useForm } from "../hooks/useForm"



export const Search = () => {

  const { handleChange } = useForm('');


    const handleSubmit = (ev) => {

        ev.preventDefault()

        const search = ev.target.search.value
      console.log(search)
      
    }

    // const url = import.meta.env.VITE_URL_SEARCH + search

  return (

    <>
      <section className="flex  space-even margin-2">

        <div>
          <p className="fsize-2r">Buscar</p>

          <h2 className="buscando text-left"> Buscando</h2>

          <form onSubmit={handleSubmit} >

            <input

              type="text"
              placeholder="Buscar"
              name="search"
              onChange={handleChange}

            />

            <input

              type="button"
              value="Buscar"

            />



          </form>
        </div>

        <div>

          <p>Card de busqueda</p>
        </div>



      </section>
    </>

  )
}
