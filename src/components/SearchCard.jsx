import { SingleProduct } from '../products/components/SingleProduct'
import { useFetch } from '../products/hooks/useFetch'

export const SearchCard = ({ search }) => {

    const url = import.meta.env.VITE_URL_SEARCH + search
     
    if(!search) return

    const {products, isLoading} = useFetch(url)
    
    const filteredProducts = products.filter(product => (

               product.category === 'mens-shoes' || 
               product.category === 'sunglasses' || 
               product.category === 'laptops'
               
    ));

    return (

        <>
            <section>

                {
                  isLoading && <h2 className="text-left"> Buscando</h2>
                }
            
                <div className="gap-1 container auto centrado">

                    {filteredProducts? (
                        filteredProducts.map(item => (
                            <SingleProduct key={item.id} {...item} />
                        ))
                        
                    ) : (
                        <p>No hay productos disponibles.</p>
                    )}

                </div>
            </section>
        </>

    )
}
