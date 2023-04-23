import { SingleProduct } from '../products/components/SingleProduct'
import { useFetch } from '../products/hooks/useFetch'

export const SearchCard = ({ search }) => {

    const url = import.meta.env.VITE_URL_SEARCH + search
     
    if(!search) return

    const request = useFetch(url)
    const products = request.products
    console.log(request)

    const filteredProducts = products.filter(product => (

               product.category === 'mens-shoes' || 
               product.category === 'sunglasses' || 
               product.category === 'laptops'
               
    ));

    console.log(filteredProducts);
    return (

        <>
            <section>
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
