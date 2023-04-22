import { useEffect, useState } from "react";
import { getProducts } from '../helpers/getProducts'



export const useFetch = (env, param ) => {
  
    const [products, setProducts] = useState([]);
    
    const consultProducts = async () => {
        
        const productItem = await getProducts(env, param );

        setProducts(productItem);

    };

    useEffect(() => {
       
        consultProducts();

    }, []);

    return {

        products

    };
};
