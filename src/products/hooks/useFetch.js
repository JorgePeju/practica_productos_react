import { useEffect, useState } from "react";
import { getProducts } from '../helpers/getProducts'



export const useFetch = (id ,category ) => {
  
    const [products, setProducts] = useState([]);
    
    const consultProducts = async () => {
        
        const productItem = await getProducts(id ,category );

        setProducts(productItem);

    };

    useEffect(() => {
       
        consultProducts();

    }, []);

    return {

        products

    };
};
