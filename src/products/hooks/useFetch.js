import { useEffect, useState } from "react";
import { getProducts } from '../helpers/getProducts'



export const useFetch = (url) => {

    const [products, setProducts] = useState([]);
    
    const consultProducts = async () => {
        
        const productItem = await getProducts(url);

        setProducts(productItem);

    };

    useEffect(() => {
       
        consultProducts();

    }, []);

    return {

        products

    };
};
