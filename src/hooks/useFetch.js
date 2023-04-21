import { useEffect, useState } from "react";
import { getProducts } from '../products/helpers/getProducts'



export const useFetch = (category) => {

    const [products, setProducts] = useState([]);

    const fetchingProducts = async () => {

        const productItem = await getProducts(category);

        setProducts(productItem);

    };

    useEffect(() => {

        fetchingProducts();

    }, []);



    return{

        products
        
    };

};