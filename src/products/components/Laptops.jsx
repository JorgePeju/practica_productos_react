import { GridProducts } from "./GridProducts"


export const Laptops = () => {

  const category = 'laptops';

  return (

    <> 

    <h2 className="categoria text-left"> Portátiles</h2>
    <GridProducts category={category} />

    </>

  )
}
