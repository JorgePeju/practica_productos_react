import { useEffect, useState } from "react";
import { getProducts } from '../helpers/getProducts'



export const useFetch = (category) => {

    const [products, setProducts] = useState([]);

    const consultProducts = async () => {

        const productItem = await getProducts(category);

        setProducts(productItem);

    };

    useEffect(() => {

        consultProducts();

    }, []);



    return{

        products
        
    };

};