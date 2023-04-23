import { GridProducts } from "./GridProducts"


export const MenShoes = () => {

  
  const category = 'mens-shoes';

  return (

    <> 
    <h2 className="categoria text-left"> Zapatillas</h2>
    <GridProducts category={category} />

    </>

  )
}
